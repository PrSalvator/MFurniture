import { DeleteDirectorSlice } from "@/entities/slice/director";
import { EQueryKeys } from "@/shared/enum/query_keys";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteDirectorUseCase = (closeWindow: () => void) => {
  const refetchDirectors = useQueryClient();
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const callback = async (id: number) => {
    return DeleteDirectorSlice(id);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      refetchDirectors.invalidateQueries({
        queryKey: [EQueryKeys.ALL_DIRECTORS],
      });
      closeWindow();
      showSuccessMessage("Начальник цеха успшено удален");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
