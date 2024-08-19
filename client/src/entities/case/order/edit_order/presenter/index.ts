import { useEditOrderUseCase } from "@/entities/case/order/edit_order/use_case";
import { IOrderDto, IOrderEditPort } from "@/shared/interfaces/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editOrderSchema } from "@/entities/case/order/edit_order/schema";
import { useLocation, useNavigate } from "react-router-dom";
import { ERoutes } from "@/shared/enum/routes";
import { useEffect } from "react";

export const useEditOrderPresenter = () => {
  const { state }: { state: IOrderDto } = useLocation();
  const { mutateAsync, isPending } = useEditOrderUseCase();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) navigate(ERoutes.ALL_ORDERS);
  }, [state])
  

  const form = useForm<IOrderEditPort>({
    resolver: yupResolver(editOrderSchema),
    defaultValues: {
          id: state? state.id : 0,
          shops_id: state ? state.shops.map((shop) => shop.id) : [],
          furniture_id: state ? state.furniture.id : 0,
        },
  });
  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return { form, handleSubmit, isPending };
};
