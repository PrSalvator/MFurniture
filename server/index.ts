import express, { Request, Response, NextFunction } from "express";
import { router } from "./src/routes";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.static("./src/static/"))
app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: "Неизвестная ошибка сервера" });
});

app.listen(8000, () => {
  console.log("Server run on 8000");
});
