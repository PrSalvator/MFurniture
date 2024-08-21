import { IOrderAddPort } from "@/shared/interfaces/order";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useAddOrderFormPresenter } from "./presenter";
import { error } from "console";
import { NavLink } from "react-router-dom";
import { ERoutes } from "@/shared/enum/routes";

interface IAddOrderFormProps {
  form: UseFormReturn<IOrderAddPort>;
  isPending: boolean;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const AddOrderForm = ({
  form,
  handleSubmit,
  isPending,
}: IAddOrderFormProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const {
    furnituresId,
    handleFurnitureOnChange,
    shopsId,
    handleShopsOnChange,
    shops,
    furnitures,
    isPending: dataPending,
  } = useAddOrderFormPresenter();

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex space-x-3">
        <FormControl error={Boolean(errors.furniture_id)}>
          <InputLabel id="label-furniture-select">Мебель</InputLabel>
          <Select
            labelId="label-furniture-select"
            className="w-[200px]"
            value={furnituresId?.toString()}
            {...register("furniture_id")}
            onChange={handleFurnitureOnChange}
            label="Мебель"
          >
            {furnitures?.map((furniture, index) => (
              <MenuItem key={index} value={furniture.id}>
                {furniture.name}
              </MenuItem>
            ))}
          </Select>
          {errors.furniture_id?.message && (
            <FormHelperText>{errors.furniture_id?.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl error={Boolean(errors.shops_id)}>
          <InputLabel id="label-shop-select">Цеха</InputLabel>
          <Select
          labelId="label-shop-select"
          label="Цеха"
            multiple
            className="w-[200px]"
            value={shopsId?.map((shopId) => shopId.toString())}
            {...register("shops_id")}
            onChange={handleShopsOnChange}
          >
            {shops?.map((shop, index) => (
              <MenuItem key={index} value={shop.id}>
                {shop.number}
              </MenuItem>
            ))}
          </Select>
          {errors.furniture_id?.message && (
            <FormHelperText>{errors.shops_id?.message}</FormHelperText>
          )}
        </FormControl>
      </section>
      <section className="flex space-x-3 justify-end">
        <Button variant="contained" type="submit">
          Добавить
        </Button>
        <NavLink to={ERoutes.ALL_ORDERS}>
          <Button variant="outlined" type="button">
            Отмена
          </Button>
        </NavLink>
      </section>
    </form>
  );
};
