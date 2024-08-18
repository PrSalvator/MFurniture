import { AlertColor } from "@mui/material";
import { createContext } from "react";

export class Snack {
  message?: string;
  color?: AlertColor;
  autoHideDuration?: number;
  open: boolean;

  constructor(data: Snack) {
    this.message = data.message || "";
    this.color = data.color || "info";
    this.autoHideDuration = data.autoHideDuration || 3000;
    this.open = data.open;
  }
}

interface ISnackbarDefaultValue {
  snack: Snack;
  setSnack: React.Dispatch<React.SetStateAction<Snack>>;
}
export const SnackbarContext = createContext<ISnackbarDefaultValue>({
  snack: new Snack({ open: false }),
  setSnack: () => {},
});
