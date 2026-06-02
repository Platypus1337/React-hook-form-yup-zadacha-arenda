import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepTwoSchema } from "../schema";

const StepTwo = ({ defaultValues, onPrev, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(stepTwoSchema),
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="email" placeholder="Email" />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      <hr />

      <input {...register("phone")} type="tel" placeholder="Телефон" />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
      <hr />

      <div style={{ display: "flex", gap: "10px" }}>
        <button type="button" onClick={onPrev}>
          Назад
        </button>
        <button type="submit" disabled={!isValid}>
          Отправить форму
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
