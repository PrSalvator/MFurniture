import * as yup from "yup";

export const addDirectorSchema = yup.object().shape({
    firstname: yup.string().required("Введите имя"),
    lastname: yup.string().required("Введите фамилию"),
    patronymic: yup.string()
})