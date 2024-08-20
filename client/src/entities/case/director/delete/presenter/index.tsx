import { IDirectorDto } from "@/shared/interfaces/director"
import { useState } from "react"
import { useDeleteDirectorUseCase } from "../use_case"
import { useDialog } from "@/shared/hooks/useDialog"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material"

export const useDeleteDirectorPresenter = () => {
    const {open, handleClose, handleOpen: openDialog} = useDialog();
    const [director, setDirector] = useState<IDirectorDto>()
    const {mutateAsync, isPending} = useDeleteDirectorUseCase(handleClose)

    const handleDelete = () => {
        if (director) mutateAsync(director.id);
      };
    
      const handleOpen = (director: IDirectorDto) => {
        setDirector(director);
        openDialog();
      };
    
      const Modal = () => {
        return (
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Удаление заказа</DialogTitle>
            <DialogContent>
              Вы уверены, что хотите удалить начальника цеха "{director?.firstname}" ?
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleDelete()}>Удалить</Button>
              <Button onClick={() => handleClose()}>Отмена</Button>
            </DialogActions>
          </Dialog>
        );
      };
    
      return {handleOpen, Modal, isPending}

}