import { useDeleteOrderUseCase } from "@/entities/case/order/delete_order/use_case";
import { useDialog } from "@/shared/hooks/useDialog";
import { IOrderDto } from "@/shared/interfaces/order";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export const useDeleteOrderPresenter = () => {
  const [order, setOrder] = useState<IOrderDto>();
  const { open, handleClose, handleOpen: openDialog } = useDialog();
  const { mutateAsync, isPending } = useDeleteOrderUseCase(handleClose);

  const handleDelete = () => {
    if (order) mutateAsync(order.id);
  };

  const handleOpen = (order: IOrderDto) => {
    setOrder(order);
    openDialog();
  };

  const Modal = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Удаление заказа</DialogTitle>
        <DialogContent>
          Вы уверены, что хотите удалить заказ на изготовление "
          {order?.furniture.name}" ?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete()}>Удалить</Button>
          <Button onClick={() => handleClose()}>Отмена</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return { isPending, handleOpen, Modal };
};
