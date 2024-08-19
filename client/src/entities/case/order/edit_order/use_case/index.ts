import { EditOrderSlice } from "@/entities/slice/order";
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IOrderEditPort } from "@/shared/interfaces/order";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useEditOrderUseCase = () => {
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const navigate = useNavigate();

  const callback = async (order: IOrderEditPort) => {
    return EditOrderSlice(order);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      showSuccessMessage("Заказ успешно отредактирован");
      navigate(ERoutes.ALL_ORDERS);
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
