import { IAddFurniturePort } from "@/shared/interfaces/furniture";
import { Button, TextField } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useAddFurnitureFormPresenter } from "@/features/forms/add_furniture/presenter";
import { mdiFileDocumentOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";
import { ERoutes } from "@/shared/enum/routes";

interface IAddFurnitureFormProps {
  form: UseFormReturn<IAddFurniturePort>;
  isPending: boolean;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const AddFurnitureForm = ({
  form,
  isPending,
  handleSubmit,
}: IAddFurnitureFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const { file, handleChange } = useAddFurnitureFormPresenter();

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex space-x-3 mb-3">
        <TextField
          className="h-[60px] w-[200px]"
          label="Название"
          helperText={errors.name?.message}
          error={Boolean(errors.name?.message)}
          {...register("name")}
        />
        <section className="flex space-x-3">
          <Button className="h-[56px] w-[200px]" variant="outlined">
            Выбрать файл
            <input
              type="file"
              accept=".docx"
              className="opacity-0 absolute w-[200px] h-full"
              {...register("file")}
              onChange={handleChange}
            />
          </Button>
          {file && (
            <div className="flex space-x-2 items-center">
              <Icon path={mdiFileDocumentOutline} size="32px" />
              {file.name}
            </div>
          )}
        </section>
      </section>
      <section className="flex space-x-3 justify-end">
        <Button variant="contained" type="submit">
          Добавить
        </Button>
        <NavLink to={ERoutes.ALL_FURNITURES}>
          <Button variant="outlined" type="button">
            Отмена
          </Button>
        </NavLink>
      </section>
    </form>
  );
};
