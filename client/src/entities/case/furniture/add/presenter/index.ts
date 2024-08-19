import { useForm } from "react-hook-form";
import { useAddFurnitureUseCase } from "@/entities/case/furniture/add/use_case";
import { IAddFurniturePort } from "@/shared/interfaces/furniture";
import { yupResolver } from "@hookform/resolvers/yup";
import { addFurnitureSchema } from "../schema";

export const useAddFurniturePresenter = () => {
  const { mutateAsync, isPending } = useAddFurnitureUseCase();
  const form = useForm<IAddFurniturePort>({resolver: yupResolver(addFurnitureSchema)});

  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return { form, handleSubmit, isPending };
};
