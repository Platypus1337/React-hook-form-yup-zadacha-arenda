import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepOneSchema } from "../schema";

const StepOne = ({ defaultValues, onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(stepOneSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmitForm = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input {...register("adress")} type="text" placeholder="Адрес" />
      {errors.adress && <p>{errors.adress.message}</p>}
      <hr />

      <input
        {...register("flatSize")}
        type="text"
        placeholder="Размер квартиры"
      />
      {errors.flatSize && <p>{errors.flatSize.message}</p>}
      <hr />

      <button type="submit" disabled={!isValid}>
        Дальше
      </button>
    </form>
  );
};

export default StepOne;
