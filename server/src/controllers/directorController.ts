import { PrismaClient, Director } from "@prisma/client";
import express, { Request } from "express";

export const directorRouter = express.Router();
const prisma = new PrismaClient();

directorRouter.get("/", async (req, res) => {
  try {
    const data = await prisma.director.findMany();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

directorRouter.post("/add", async (req: Request<{}, {}, Director>, res) => {
  try {
    const data = req.body;
    await prisma.director.create({ data: data });
    res.status(201).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

directorRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.director.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

directorRouter.put(
  "/:id",
  async (req: Request<{ id: number }, {}, Director>, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await prisma.director.update({
        where: {
          id: Number(id),
        },
        data: data,
      });
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);
