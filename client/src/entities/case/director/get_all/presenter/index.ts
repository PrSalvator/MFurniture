import { useGetDirectorsUseCase } from "@/entities/case/director/get_all/use_case";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { useEffect } from "react";

export const useGetDirectorsPresenter = () => {
  const { showErrorMessage } = useSnackbar();
  const { data, isError, error, isPending } = useGetDirectorsUseCase();

  useEffect(() => {
    if (isError) showErrorMessage();
  }, [error]);

  return { data: data?.data, isPending };
};
