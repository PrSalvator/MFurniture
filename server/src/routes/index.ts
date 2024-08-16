import express from "express";
import { furnitureRouter } from "../controllers/furnitureController";

export const router = express.Router();

router.use("/furniture", furnitureRouter);
