import * as yup from "yup";

export const editOrderSchema = yup.object().shape({
  id: yup.number().required(),
  shops_id: yup
    .array()
    .required("Выберите цех")
    .min(1, "Выберите цех")
    .transform((value, originalValue) => {
      return Array.isArray(value) ? value.map((x) => parseInt(x)) : undefined;
    }),
  furniture_id: yup
    .number()
    .required("Выберите мебель")
    .transform((value, originalValue) => {
      const num = Number(value);
      return !Number.isNaN(num) ? num : undefined;
    }),
});
