import { addShopSlice } from "@/entities/slice/shop";
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IAddShopPort } from "@/shared/interfaces/shop";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAddShopUseCase = () => {
  const navigate = useNavigate();
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const callback = async (data: IAddShopPort) => {
    return addShopSlice(data);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      navigate(ERoutes.ALL_SHOPS), showSuccessMessage("Цех успешно добавлен");
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
