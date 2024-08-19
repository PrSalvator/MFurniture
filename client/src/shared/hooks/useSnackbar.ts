import { useContext } from "react";
import { Snack, SnackbarContext } from "@/shared/contexts/snackbar";

export const useSnackbar = () => {
  const {setSnack} = useContext(SnackbarContext);

  const showSuccessMessage = (message: string) => {
    setSnack(new Snack({open: true, message: message, color: "success"}))
  }

  const showErrorMessage = () => {
    setSnack(new Snack({open: true, message: "Что-то пошло не так", color: "error"}))
  }

  return {showErrorMessage, showSuccessMessage}
};
