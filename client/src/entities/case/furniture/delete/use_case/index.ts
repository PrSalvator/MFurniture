import { DeleteFurnitureSlice } from "@/entities/slice/furniture";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteFurnitureUseCase = (closeWindow: () => void) => {
  const refetchFurnitures = useQueryClient();
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const callback = async (id: number) => {
    return DeleteFurnitureSlice(id);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      refetchFurnitures.invalidateQueries({
        queryKey: [EQueryKeys.ALL_FURNITURES],
      });
      closeWindow();
      showSuccessMessage("Удаление мебели прошло успешно");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
