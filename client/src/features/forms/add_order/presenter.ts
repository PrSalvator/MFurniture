import { useGetAllFurnituresPresenter } from "@/entities/case/furniture/get_all/presenter";
import { useGetAllShopsPresenter } from "@/entities/case/shop/get_all/presenter";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export const useAddOrderFormPresenter = () => {
  const [furnituresId, setFurnituresId] = useState<string>("");
  const [shopsId, setShopsId] = useState<string[]>([]);
  const { data: furnitures, isPending: furnituresPending } =
    useGetAllFurnituresPresenter();
  const { data: shops, isPending: shopsPending } = useGetAllShopsPresenter();

  const handleFurnitureOnChange = (event: SelectChangeEvent) => {
    setFurnituresId(event.target.value);
  };

  const handleShopsOnChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value.toString().split(",").at(-1) || "";

    if (shopsId.length > 0) {
      const arr = shopsId.filter((x) => x !== selectedValue);
      if (arr.length === shopsId.length) arr.push(selectedValue);
      setShopsId(arr);
    } else setShopsId([selectedValue]);
  };

  return {
    furnituresId,
    handleFurnitureOnChange,
    shopsId,
    handleShopsOnChange,
    shops,
    furnitures,
    isPending: shopsPending && furnituresPending,
  };
};
