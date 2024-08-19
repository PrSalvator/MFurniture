import { AddFurnitureSlice } from "@/entities/slice/furniture";
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IAddFurniturePort } from "@/shared/interfaces/furniture";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAddFurnitureUseCase = () => {
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const navigate = useNavigate();
  const callback = async (data: IAddFurniturePort) => {
    return AddFurnitureSlice(data);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      navigate(ERoutes.ALL_FURNITURES);
      showSuccessMessage("Мебель успешно добавлена");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
