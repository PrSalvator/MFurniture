import { useDeleteFurnitureUseCase } from "@/entities/case/furniture/delete/use_case";
import { useDialog } from "@/shared/hooks/useDialog";
import { IFurnitureDto } from "@/shared/interfaces/furniture";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";

export const useDeleteFurniturePresenter = () => {
  const [furniture, setFurniture] = useState<IFurnitureDto>();
  const { handleClose, handleOpen: openDialog, open } = useDialog();
  const { mutateAsync } = useDeleteFurnitureUseCase(handleClose);

  const handleDelete = () => {
    if (furniture) mutateAsync(furniture.id);
  };

  const handleOpen = (furniture: IFurnitureDto) => {
    setFurniture(furniture);
    openDialog();
  };

  const Modal = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Удаление заказа</DialogTitle>
        <DialogContent>
          Вы уверены, что хотите удалить мебель "{furniture?.name}" ?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete()} variant="outlined">Удалить</Button>
          <Button onClick={() => handleClose()} variant="contained">Отмена</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return {handleOpen, Modal}
};
