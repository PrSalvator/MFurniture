import { AddOrderSlice } from "@/entities/slice/order";
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IOrderAddPort } from "@/shared/interfaces/order";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAddOrderUseCase = () => {
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const navigate = useNavigate();

  const callback = async (order: IOrderAddPort) => {
    return AddOrderSlice(order);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      navigate(ERoutes.ALL_ORDERS);
      showSuccessMessage("Заказ успешно создан");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
