import { useGetAllOrdersUseCase } from "@/entities/case/order/get_all/use_case";
import { Snack, SnackbarContext } from "@/shared/contexts/snackbar";
import { useContext, useEffect } from "react";

export const UseGetOrdersPresenter = () => {
  const { data, isPending, error, isError } = useGetAllOrdersUseCase();
  const {snack, setSnack} = useContext(SnackbarContext);

  useEffect(() => {
    if (!isError) {
      setSnack(new Snack({message: 'Some error', color:'error', open: true}))
    }
  }, [error]);

  return { data: data?.data, isPending };
};
