import { editShopSlice } from "@/entities/slice/shop";
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IEditShopPort } from "@/shared/interfaces/shop";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useEditShopUseCase = () => {
  const navigate = useNavigate();
  const { showErrorMessage, showSuccessMessage } = useSnackbar();
  const callback = async (data: IEditShopPort) => {
    return editShopSlice(data);
  };

  return useMutation({
    mutationFn: callback,
    onSuccess: () => {
      showSuccessMessage("Изменение информации о цехе прошло успешно");
      navigate(ERoutes.ALL_SHOPS);
    },
    onError: () => {
      showErrorMessage();
    },
  });
};
