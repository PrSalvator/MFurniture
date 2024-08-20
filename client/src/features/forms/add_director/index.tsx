import { IAddDirectorPort } from "@/shared/interfaces/director";
import { Button, TextField } from "@mui/material";
import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

interface IAddDirectorFormProps {
  form: UseFormReturn<IAddDirectorPort>;
  handleSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  isPending: boolean;
}

export const AddDirectorForm = ({form, handleSubmit, isPending}: IAddDirectorFormProps) => {
    const {register, formState: {errors}} = form;
    
    return(
        <form onSubmit={handleSubmit}>
            <TextField label="Фамилия" error={Boolean(errors.lastname)} helperText={errors.lastname?.message} {...register("lastname")}/>
            <TextField label="Имя" error={Boolean(errors.firstname)} helperText={errors.firstname?.message} {...register("firstname")}/>
            <TextField label="Отчество" error={Boolean(errors.patronymic)} helperText={errors.patronymic?.message} {...register("patronymic")}/>
            <Button type="submit">Add</Button>
            <Button type="button">Cancl</Button>
        </form>
    )
};
