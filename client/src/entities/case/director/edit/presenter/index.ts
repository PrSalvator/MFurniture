import { useForm } from "react-hook-form";
import { useEditDirectorUseCase } from "@/entities/case/director/edit/use_case";
import { IDirectorDto, IEditDirectorPort } from "@/shared/interfaces/director";
import { yupResolver } from "@hookform/resolvers/yup";
import { editDirectorSchema } from "@/entities/case/director/edit/schema";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ERoutes } from "@/shared/enum/routes";

export const useEditDirectorPresenter = () => {
  const navigate = useNavigate()
  const { state }: { state: IDirectorDto } = useLocation();
  const { mutateAsync, isPending } = useEditDirectorUseCase();

  useEffect(() => {
    if (state === null) navigate(ERoutes.ALL_DIRECTORS);
  }, [state]);

  const form = useForm<IEditDirectorPort>({
    resolver: yupResolver(editDirectorSchema),
    defaultValues: {
      id: state ? state.id : 0,
      firstname: state ? state.firstname : "",
      lastname: state ? state.lastname : "",
      patronymic: state ? state.patronymic : "",
    },
  });
  const handleSubmit = form.handleSubmit((data) => {
    mutateAsync(data);
  });

  return { form, handleSubmit, isPending };
};
