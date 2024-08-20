import {
  IEditFurniturePort,
  IFurnitureDto,
} from "@/shared/interfaces/furniture";
import { useEditFurnitureUseCase } from "@/entities/case/furniture/edit/use_case";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ERoutes } from "@/shared/enum/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { editFurnitureSchema } from "@/entities/case/furniture/edit/schema";

export const useEditFurniturePresenter = () => {
  const { state }: { state: IFurnitureDto } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) navigate(ERoutes.ALL_FURNITURES);
  }, [state]);

  const { mutateAsync, isPending } = useEditFurnitureUseCase();
  const form = useForm<IEditFurniturePort>({resolver: yupResolver(editFurnitureSchema), defaultValues:{
    id: state ? state.id : 0,
    name: state ? state.name : ""
  }});
  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return { handleSubmit, form, isPending };
};
