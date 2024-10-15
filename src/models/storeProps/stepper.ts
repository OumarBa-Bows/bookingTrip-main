// types.ts
export interface UseStepperProps {
    loading: boolean;
    activeStep: number;
    stepperLength: number;
    setStep: (step: number) => void;
  }
  