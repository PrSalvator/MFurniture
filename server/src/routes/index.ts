import express from "express";
import { furnitureRouter } from "../controllers/furnitureController";
import { directorRouter } from "../controllers/directorController";

export const router = express.Router();

router.use("/furniture", furnitureRouter);
router.use("/director", directorRouter);
