import { IEditShopPort } from "@/shared/interfaces/shop";
import {
    Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";
import { useAddShopFormPresenter } from "@/features/forms/add_shop/presenter";

interface IEditShopFormProps {
  form: UseFormReturn<IEditShopPort>;
  handleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  isPending: boolean;
}

export const EditShopForm = ({
  form,
  handleSubmit,
  isPending,
}: IEditShopFormProps) => {
  const {
    register,
    formState: { errors },
    getValues
  } = form;
  const { directors, directorsId, handleChange } = useAddShopFormPresenter();

  return (
    <form onSubmit={handleSubmit}>
      <TextField
      label="Номер"
        error={Boolean(errors.number)}
        helperText={errors.number?.message}
        {...register("number")}
      />
      <FormControl error={Boolean(errors.director_id)}>
        <InputLabel>Начальник цеха</InputLabel>
        <Select
          value={directorsId ? directorsId : getValues("director_id").toString()}
          className="w-[200px]"
          {...register("director_id")}
          onChange={handleChange}
        >
          {directors?.map((director, index) => (
            <MenuItem key={index} value={director.id}>
              {director.firstname}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.director_id?.message}</FormHelperText>
      </FormControl>
      <Button type="submit">Add</Button>
      <Button type="button">Canc</Button>
    </form>
  );
};