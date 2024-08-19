import { useForm } from "react-hook-form";
import { useAddOrderUseCase } from "../use_case";
import { IOrderAddPort } from "@/shared/interfaces/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { addOrderSchema } from "@/entities/case/order/add_order/schema";

export const useAddOrderPresenter = () => {
  const { mutateAsync, isPending } = useAddOrderUseCase();
  const form = useForm<IOrderAddPort>({
    resolver: yupResolver(addOrderSchema),
  });

  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return { form, handleSubmit, isPending };
};
