import { IOrderEditPort } from "@/shared/interfaces/order";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useEditOrderFormPresenter } from "@/features/forms/edit_order/presenter";

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
    getValues
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
      <input hidden={true} {...register("id")} />
      <FormControl error={Boolean(errors.furniture_id)}>
        <InputLabel>Мебель</InputLabel>
        <Select
          className="w-[200px]"
          value={furnituresId ? furnituresId.toString() : getValues("furniture_id").toString()}
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
          value={shopsId.length > 0 ? shopsId.map((shopId) => shopId.toString()) : getValues("shops_id").map((shopId) => shopId.toString())}
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
