import { deleteShopSlice } from "@/entities/slice/shop";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteShopUseCase = (closeWindow: () => void) => {
  const refetchShops = useQueryClient();
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const callback = async (id: number) => {
    return deleteShopSlice(id);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      refetchShops.invalidateQueries({ queryKey: [EQueryKeys.ALL_SHOPS] });
      closeWindow();
      showSuccessMessage("Удаление цеха прошло успешно");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
