import * as yup from "yup";

const regExpEmail = /[a-zA-Z0-9._-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9]{2,6}/;
const regExpPhone = /^[78][\d]{10}$/;

export const stepOneSchema = yup.object().shape({
  adress: yup
    .string()
    .trim()
    .required("Обязательно заполните адрес")
    .min(3, "Не меньше трех символов"),
  flatSize: yup
    .string()
    .required("Укажите метраж")
    .min(2, "Не менее двух символов"),
});

export const stepTwoSchema = yup.object().shape({
  email: yup
    .string()
    .required("Укажите email")
    .matches(regExpEmail, "Неверный формат email"),
  phone: yup
    .string()
    .required("Укажите телефон")
    .matches(regExpPhone, "Неверный формат сотового номера"),
});
