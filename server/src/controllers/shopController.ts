import { PrismaClient, Shop } from "@prisma/client";
import express, { Request } from "express";

export const shopRouter = express.Router();
const prisma = new PrismaClient();

shopRouter.get("/", async (req, res) => {
  try {
    const shops = await prisma.shop
      .findMany({
        relationLoadStrategy: "join",
        include: {
          director: true,
        },
      })
      .then((data) => {
        return data.map((shop) => {
          return {
            id: shop.id,
            number: shop.number,
            director: {
              id: shop.director.id,
              lastname: shop.director.lastname,
              firstname: shop.director.firstname,
              patronymic: shop.director.patronymic,
            },
          };
        });
      });
    res.status(200).json(shops);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

shopRouter.post("/add", async (req: Request<{}, {}, Shop>, res) => {
  try {
    const data = req.body;
    await prisma.shop.create({ data: data });
    res.status(201).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

shopRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.orderOnShop.deleteMany({
      where: {
        shop_id: Number(id),
      },
    });
    await prisma.shop.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

shopRouter.put("/:id", async (req: Request<{ id: number }, {}, Shop>, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await prisma.shop.update({
      where: {
        id: Number(id),
      },
      data: data,
    });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
