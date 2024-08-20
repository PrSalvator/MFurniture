import { AddDirectorSlice } from "@/entities/slice/director";
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IAddDirectorPort } from "@/shared/interfaces/director";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAddDirectorUseCase = () => {
  const naviagate = useNavigate();
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const callback = async (data: IAddDirectorPort) => {
    return AddDirectorSlice(data);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      naviagate(ERoutes.ALL_DIRECTORS),
        showSuccessMessage("Начальник цеха успешно добавлен");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
