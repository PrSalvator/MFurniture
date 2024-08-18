import axios from "axios";
import { PORT } from "@/shared/constants";

export const instance = axios.create({
  baseURL: `http://localhost:${PORT}/api/`,
});
