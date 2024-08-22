import { useDialog } from "@/shared/hooks/useDialog";
import { useDeleteShopUseCase } from "@/entities/case/shop/delete/use_case";
import { useState } from "react";
import { IShopDto } from "@/shared/interfaces/shop";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export const useDeleteShopPresenter = () => {
  const [shop, setShop] = useState<IShopDto>();
  const { open, handleClose, handleOpen: openDialog } = useDialog();
  const { mutateAsync, isPending } = useDeleteShopUseCase(handleClose);

  const handleDelete = () => {
    if (shop) mutateAsync(shop.id);
  };

  const handleOpen = (shop: IShopDto) => {
    setShop(shop);
    openDialog();
  };

  const Modal = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Удаление цеха</DialogTitle>
        <DialogContent>
          Вы уверены, что хотите удалить цех с номером {shop?.number}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete()} variant="outlined">Удалить</Button>
          <Button onClick={() => handleClose()} variant="contained">Отмена</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return { isPending, handleOpen, Modal };
};
