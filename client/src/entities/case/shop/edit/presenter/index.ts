import { useForm } from "react-hook-form";
import { useEditShopUseCase } from "@/entities/case/shop/edit/use_case";
import { IEditShopPort, IShopDto } from "@/shared/interfaces/shop";
import { editShopSchema } from "@/entities/case/shop/edit/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ERoutes } from "@/shared/enum/routes";

export const useEditShopPresenter = () => {
  const naviagate = useNavigate()
  const { state }: { state: IShopDto } = useLocation();
  const { mutateAsync, isPending } = useEditShopUseCase();

  useEffect(() => {
    if (state === null) naviagate(ERoutes.ALL_SHOPS)
  }, [state]);

  const form = useForm<IEditShopPort>({
    resolver: yupResolver(editShopSchema),
    defaultValues: {
      id: state ? state.id : 0,
      director_id: state ? state.director.id : 0,
      number: state ? state.number : "",
    },
  });
  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return { handleSubmit, form, isPending };
};
