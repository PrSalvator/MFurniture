import express, { Request } from "express";
import { Furniture, PrismaClient } from "@prisma/client";
import { UploadedFile } from "express-fileupload";
import { addFile, deleteFile } from "../utils/file";

export const furnitureRouter = express.Router();
const prisma = new PrismaClient();

furnitureRouter.get("/", async (req, res) => {
  try {
    const data = await prisma.furniture.findMany();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.me });
  }
});

furnitureRouter.post("/add", async (req: Request<{}, {}, Furniture>, res) => {
  try {
    const file = req.files?.file as UploadedFile;
    const filename = addFile(file);
    const data = req.body;
    await prisma.furniture.create({
      data: {
        name: data.name,
        file: filename,
      },
    });
    res.status(201).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

furnitureRouter.delete(
  "/:id",
  async (req: Request<{ id: number }>, res, next) => {
    try {
      const { id } = req.params;

      const fileToDelete = await prisma.furniture
        .findFirst({
          where: {
            id: Number(id),
          },
        })
        .then((data) => data?.file);

      if (fileToDelete) {
        deleteFile(fileToDelete);
      }

      await prisma.furniture.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);

furnitureRouter.put(
  "/:id",
  async (req: Request<{ id: number }, {}, Furniture>, res) => {
    try {
      const file = req.files?.file as UploadedFile;
      const fileName = addFile(file);

      const { id } = req.params;
      const data = req.body;

      const fileToDelete = await prisma.furniture
        .findFirst({
          where: {
            id: Number(id),
          },
        })
        .then((data) => data?.file);

      if (fileToDelete) {
        deleteFile(fileToDelete);
      }

      await prisma.furniture.update({
        where: {
          id: Number(id),
        },
        data: {
          name: data.name,
          file: fileName,
        },
      });

      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);
