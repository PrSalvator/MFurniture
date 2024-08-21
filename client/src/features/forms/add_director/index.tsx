import { ERoutes } from "@/shared/enum/routes";
import { IAddDirectorPort } from "@/shared/interfaces/director";
import { Button, TextField } from "@mui/material";
import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { NavLink } from "react-router-dom";

interface IAddDirectorFormProps {
  form: UseFormReturn<IAddDirectorPort>;
  handleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  isPending: boolean;
}

export const AddDirectorForm = ({
  form,
  handleSubmit,
  isPending,
}: IAddDirectorFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <form onSubmit={handleSubmit}>
      <section className="flex space-x-3">
        <TextField
          label="Фамилия"
          error={Boolean(errors.lastname)}
          helperText={errors.lastname?.message}
          {...register("lastname")}
        />
        <TextField
          label="Имя"
          error={Boolean(errors.firstname)}
          helperText={errors.firstname?.message}
          {...register("firstname")}
        />
        <TextField
          label="Отчество"
          error={Boolean(errors.patronymic)}
          helperText={errors.patronymic?.message}
          {...register("patronymic")}
        />
      </section>
      <section>
        <section className="flex space-x-3 justify-end">
          <Button type="submit" variant="contained">
            Добавить
          </Button>
          <NavLink to={ERoutes.ALL_DIRECTORS}>
            <Button type="button" variant="outlined">
              Отмена
            </Button>
          </NavLink>
        </section>
      </section>
    </form>
  );
};
