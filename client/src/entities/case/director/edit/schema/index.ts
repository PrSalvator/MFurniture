import * as yup from "yup";

export const editDirectorSchema = yup.object().shape({
  id: yup.number().required(),
  firstname: yup.string().required("Введите имя"),
  lastname: yup.string().required("Введите фамилию"),
  patronymic: yup.string(),
});
