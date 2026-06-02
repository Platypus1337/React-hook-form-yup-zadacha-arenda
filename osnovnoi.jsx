import { useState, useEffect } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";

const App = () => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("userInfo");
    return saved
      ? JSON.parse(saved)
      : { adress: "", flatSize: "", email: "", phone: "" };
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(formData));
  }, [formData]);

  const handleNext = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleFinalSubmit = (stepData) => {
    const finalData = { ...formData, ...stepData };
    console.log(finalData, "Данные отправлены");
    localStorage.removeItem("userInfo");
    setFormData({ adress: "", flatSize: "", email: "", phone: "" });
    setStep(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Шаг {step + 1} из 2</h2>

      {step === 0 && (
        <StepOne
          defaultValues={{
            adress: formData.adress,
            flatSize: formData.flatSize,
          }}
          onNext={handleNext}
        />
      )}

      {step === 1 && (
        <StepTwo
          defaultValues={{ email: formData.email, phone: formData.phone }}
          onPrev={handlePrev}
          onSubmit={handleFinalSubmit}
        />
      )}
    </div>
  );
};

export default App;
