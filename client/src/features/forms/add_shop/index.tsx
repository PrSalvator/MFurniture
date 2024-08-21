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
import { NavLink } from "react-router-dom";
import { ERoutes } from "@/shared/enum/routes";
import { useFio } from "@/shared/hooks/useFio";

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
  const { getFio } = useFio();
  return (
    <form onSubmit={handleSubmit}>
      <section className="flex space-x-3">
        <TextField
          label="Номер"
          error={Boolean(errors.number)}
          helperText={errors.number?.message}
          {...register("number")}
        />
        <FormControl error={Boolean(errors.director_id)}>
          <InputLabel id="label-director-select">Начальник цеха</InputLabel>
          <Select
            label="Начальник цеха"
            labelId="label-director-select"
            value={directorsId}
            className="w-[200px]"
            {...register("director_id")}
            onChange={handleChange}
          >
            {directors?.map((director, index) => (
              <MenuItem key={index} value={director.id}>
                {getFio(director)}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.director_id?.message}</FormHelperText>
        </FormControl>
      </section>
      <section className="flex space-x-3 justify-end">
        <Button type="submit" variant="contained">
          Добавить
        </Button>
        <NavLink to={ERoutes.ALL_SHOPS}>
          <Button type="button" variant="outlined">
            Отмена
          </Button>
        </NavLink>
      </section>
    </form>
  );
};
