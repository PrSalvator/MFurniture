import axios from "axios";
import { ADDRESS } from "@/shared/constants";

export const instance = axios.create({
  baseURL: `${ADDRESS}/api/`,
});
