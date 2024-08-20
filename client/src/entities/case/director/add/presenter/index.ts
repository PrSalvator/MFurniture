import { useForm } from "react-hook-form"
import { useAddDirectorUseCase } from "@/entities/case/director/add/use_case"
import { IAddDirectorPort } from "@/shared/interfaces/director"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDirectorSchema } from "@/entities/case/director/add/schema"

export const useAddDirectorPresenter = () => {
    const {mutateAsync, isPending} = useAddDirectorUseCase()
    const form = useForm<IAddDirectorPort>({resolver: yupResolver(addDirectorSchema)});
    const handleSubmit = form.handleSubmit((data) => {
        mutateAsync(data)
    })

    return {form, handleSubmit, isPending}
}