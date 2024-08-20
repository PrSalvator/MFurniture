import { useAddShopUseCase } from "@/entities/case/shop/add/use_case";
import { IAddShopPort } from "@/shared/interfaces/shop";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addShopSchema } from "@/entities/case/shop/add/schema";

export const useAddShopPresenter = () => {
  const { mutateAsync, isPending } = useAddShopUseCase();
  const form = useForm<IAddShopPort>({ resolver: yupResolver(addShopSchema) });
  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return { handleSubmit, form, isPending };
};
