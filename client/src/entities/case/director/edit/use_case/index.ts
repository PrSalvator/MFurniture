import { EditDirectorSlice } from "@/entities/slice/director";
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IEditDirectorPort } from "@/shared/interfaces/director";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useEditDirectorUseCase = () => {
  const navigate = useNavigate();
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const callback = async (data: IEditDirectorPort) => {
    return EditDirectorSlice(data);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      navigate(ERoutes.ALL_DIRECTORS);
      showSuccessMessage("Начальник цеха успешно отредактирован");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
