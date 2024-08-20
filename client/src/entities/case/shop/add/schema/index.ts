import * as yup from "yup";

export const addShopSchema = yup.object().shape({
  director_id: yup
    .number()
    .required("Выберите начальника цеха")
    .transform((value, originalValue) => {
      const num = Number(value);
      return !Number.isNaN(num) ? num : undefined;
    }),
  number: yup.string().required("Введите номер цеха"),
});
