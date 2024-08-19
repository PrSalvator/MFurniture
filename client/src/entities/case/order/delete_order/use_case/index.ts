import { DeleteOrder } from "@/entities/slice/order";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteOrderUseCase = (closeWindow: () => void) => {
    const {showErrorMessage, showSuccessMessage} = useSnackbar();
    const refetchOrders = useQueryClient();
  const callback = async (id: number) => {
    return DeleteOrder(id);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
        refetchOrders.invalidateQueries({queryKey: [EQueryKeys.ALL_ORDERS]});
        closeWindow();
        showSuccessMessage("Заказ успешно удален");
    },
    onError: () => {
        showErrorMessage();
    }
  })
};
