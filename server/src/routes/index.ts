import express from "express";
import { furnitureRouter } from "../controllers/furnitureController";
import { directorRouter } from "../controllers/directorController";
import { shopRouter } from "../controllers/shopController";
import { orderRouter } from "../controllers/orderController";

export const router = express.Router();

router.use("/furniture", furnitureRouter);
router.use("/director", directorRouter);
router.use("/shop", shopRouter);
router.use("/order", orderRouter);