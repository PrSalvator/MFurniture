import * as yup from "yup";

export const editShopSchema = yup.object().shape({
  id: yup.number().required(),
  director_id: yup
    .number()
    .required("Выберите начальника цеха")
    .transform((value, originalValue) => {
      const num = Number(value);
      return !Number.isNaN(num) ? num : undefined;
    }),
  number: yup.string().required("Введите номер цеха"),
});
