import { PrismaClient, Order } from "@prisma/client";
import express, { Request } from "express";
import { orderPostDto, orderPutDto } from "../models/order";

export const orderRouter = express.Router();
const prisma = new PrismaClient();

orderRouter.get("/", async (req, res) => {
  try {
    const data = await prisma.order
      .findMany({
        include: {
          furniture: true,
          orderOnShops: {
            include: {
              shop: true,
            },
          },
        },
      })
      .then((data) => {
        return data.map((order) => {
          return {
            id: order.id,
            shops: order.orderOnShops.map((orderOnShop) => {
              return orderOnShop.shop;
            }),
            furniture: order.furniture,
          };
        });
      });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

orderRouter.post("/add", async (req: Request<{}, {}, orderPostDto>, res) => {
  try {
    const data = req.body;
    const order = await prisma.order.create({
      data: {
        furniture_id: data.furniture_id,
      },
    });
    await prisma.orderOnShop.createMany({
      data: data.shops_id.map((shop_id) => {
        return {
          order_id: order.id,
          shop_id: shop_id,
        };
      }),
    });
    res.status(201).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

orderRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.order.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

orderRouter.put(
  "/:id",
  async (req: Request<{ id: number }, {}, orderPutDto>, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await prisma.orderOnShop.deleteMany({
        where: {
          order_id: Number(id),
        },
      });
      await prisma.order.update({
        where: {
          id: Number(id),
        },
        data: {
          furniture_id: data.furniture_id,
        },
      });
      await prisma.orderOnShop.createMany({
        data: data.shops_id.map((shop_id) => {
          return {
            order_id: Number(id),
            shop_id: shop_id,
          };
        }),
      });
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);
