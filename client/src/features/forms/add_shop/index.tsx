import { IAddShopPort } from "@/shared/interfaces/shop";
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

interface IAddShopFormProps {
  form: UseFormReturn<IAddShopPort>;
  handleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  isPending: boolean;
}

export const AddShopForm = ({
  form,
  handleSubmit,
  isPending,
}: IAddShopFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;
  const { directors, directorsId, handleChange } = useAddShopFormPresenter();

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        error={Boolean(errors.number)}
        helperText={errors.number?.message}
        {...register("number")}
      />
      <FormControl error={Boolean(errors.director_id)}>
        <InputLabel>Начальник цеха</InputLabel>
        <Select
          value={directorsId}
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
