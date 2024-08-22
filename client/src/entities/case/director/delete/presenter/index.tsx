import { IDirectorDto } from "@/shared/interfaces/director";
import { useState } from "react";
import { useDeleteDirectorUseCase } from "../use_case";
import { useDialog } from "@/shared/hooks/useDialog";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useFio } from "@/shared/hooks/useFio";

export const useDeleteDirectorPresenter = () => {
  const { open, handleClose, handleOpen: openDialog } = useDialog();
  const [director, setDirector] = useState<IDirectorDto>();
  const { mutateAsync, isPending } = useDeleteDirectorUseCase(handleClose);
  const { getFio } = useFio();

  const handleDelete = () => {
    if (director) mutateAsync(director.id);
  };

  const handleOpen = (director: IDirectorDto) => {
    setDirector(director);
    openDialog();
  };

  const Modal = () => {
    return (
      director && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Удаление начальника</DialogTitle>
          <DialogContent>
            Вы уверены, что хотите удалить начальника цеха "{getFio(director!)}"
            ?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleDelete()} variant="outlined">Удалить</Button>
            <Button onClick={() => handleClose()} variant="contained">Отмена</Button>
          </DialogActions>
        </Dialog>
      )
    );
  };

  return { handleOpen, Modal, isPending };
};
