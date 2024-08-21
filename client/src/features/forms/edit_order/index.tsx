import { IOrderEditPort } from "@/shared/interfaces/order";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useEditOrderFormPresenter } from "@/features/forms/edit_order/presenter";
import { ERoutes } from "@/shared/enum/routes";
import { NavLink } from "react-router-dom";

interface IEditOrderFormProps {
  form: UseFormReturn<IOrderEditPort>;
  isPending: boolean;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const EditOrderForm = ({
  form,
  handleSubmit,
  isPending,
}: IEditOrderFormProps) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = form;

  const {
    furnituresId,
    handleFurnitureOnChange,
    shopsId,
    handleShopsOnChange,
    shops,
    furnitures,
    isPending: dataPending,
  } = useEditOrderFormPresenter();

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex space-x-3">
        <FormControl error={Boolean(errors.furniture_id)}>
          <InputLabel id="label-furniture-select">Мебель</InputLabel>
          <Select
            labelId="label-furniture-select"
            label="Мебель"
            className="w-[200px]"
            value={
              furnituresId
                ? furnituresId.toString()
                : getValues("furniture_id").toString()
            }
            {...register("furniture_id")}
            onChange={handleFurnitureOnChange}
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
            value={
              shopsId.length > 0
                ? shopsId.map((shopId) => shopId.toString())
                : getValues("shops_id").map((shopId) => shopId.toString())
            }
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
          Редактировать
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
