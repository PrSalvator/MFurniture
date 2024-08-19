import { useGetAllShopsUseCase } from "@/entities/case/shop/get_all/use_case";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { useEffect } from "react";

export const useGetAllShopsPresenter = () => {
  const { data, error, isError, isPending } = useGetAllShopsUseCase();
  const { showErrorMessage } = useSnackbar();

  useEffect(() => {
    if (isError) {
      showErrorMessage();
    }
  }, [error]);

  return { data: data?.data, isPending };
};
