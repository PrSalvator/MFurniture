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
import { ERoutes } from "@/shared/enum/routes";
import { NavLink } from "react-router-dom";
import { useFio } from "@/shared/hooks/useFio";

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
    getValues,
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
            value={
              directorsId ? directorsId : getValues("director_id").toString()
            }
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
          Редактировать
        </Button>
        <NavLink to={ERoutes.ALL_SHOPS}>
          <Button type="button" variant="outlined">Отмена</Button>
        </NavLink>
      </section>
    </form>
  );
};
