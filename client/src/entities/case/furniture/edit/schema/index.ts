import * as yup from "yup";

export const editFurnitureSchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required("Введите название мебели"),
  file: yup
    .mixed<FileList>()
    .required()
    .test("required", "Выберите файл", (data) => {
      if (!data) return false;
      return data!.length > 0;
    }),
});
