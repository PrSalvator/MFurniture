import { EditFurnitureSlice } from "@/entities/slice/furniture"
import { ERoutes } from "@/shared/enum/routes";
import { useSnackbar } from "@/shared/hooks/useSnackbar";
import { IEditFurniturePort } from "@/shared/interfaces/furniture"
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useEditFurnitureUseCase = () => {
    const {showErrorMessage, showSuccessMessage} = useSnackbar()
    const navigate = useNavigate();

    const callback = async (data: IEditFurniturePort) => {
        return EditFurnitureSlice(data);
    }

    return useMutation({
        mutationFn: callback,
        onSuccess: () => {
            navigate(ERoutes.ALL_FURNITURES);
            showSuccessMessage("Мебель успешно отредактирована")
        },
        onError: () => {
            showErrorMessage();
        }
    })
}