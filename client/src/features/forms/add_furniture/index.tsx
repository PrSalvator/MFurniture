import { IAddFurniturePort } from "@/shared/interfaces/furniture";
import { Button, TextField } from "@mui/material";
import { UseFormReturn } from "react-hook-form";

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
    formState: { errors }
  } = form;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Название"
        helperText={errors.name?.message}
        error={Boolean(errors.name?.message)}
        {...register("name")}
      />
      <input type="file" {...register("file")} accept=".docx" />
      <p>{errors.file?.message}</p>
      <Button type="submit">Создать</Button>
      <Button type="button">Отмена</Button>
    </form>
  );
};
