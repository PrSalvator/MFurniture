import { IOrderAddPort } from "@/shared/interfaces/order";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useAddOrderFormPresenter } from "./presenter";
import { error } from "console";

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
      <FormControl error={Boolean(errors.furniture_id)}>
        <InputLabel>Мебель</InputLabel>
        <Select
          className="w-[200px]"
          value={furnituresId?.toString()}
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
        <InputLabel>Цеха</InputLabel>
        <Select
          multiple
          className="w-[200px]"
          value={shopsId?.map(shopId => shopId.toString())}
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
      <button type="submit">Create</button>
      <button type="button">Cancel</button>
    </form>
  );
};
