import { useGetDirectorsPresenter } from "@/entities/case/director/get_all/presenter";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export const useAddShopFormPresenter = () => {
  const { data: directors } = useGetDirectorsPresenter();
  const [directorsId, setDirectorsId] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setDirectorsId(event.target.value);
  };

  return { handleChange, directors, directorsId };
};
