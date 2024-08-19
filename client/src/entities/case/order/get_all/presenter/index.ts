import { useGetAllOrdersUseCase } from "@/entities/case/order/get_all/use_case";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { useEffect } from "react";

export const useGetOrdersPresenter = () => {
  const { data, isPending, error, isError } = useGetAllOrdersUseCase();
  const {showErrorMessage} = useSnackbar();

  useEffect(() => {
    if (isError) {
      alert(error)
      showErrorMessage();
    }
  }, [error]);

  return { data: data?.data, isPending };
};
