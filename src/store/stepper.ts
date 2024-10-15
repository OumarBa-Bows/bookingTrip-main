// useStepperStore.ts
import { UseStepperProps } from '@/models/storeProps/stepper';
import {create} from 'zustand';
 

export const useStepper = create<UseStepperProps>((set) => ({
  loading: false,
  activeStep: 1,
  stepperLength: 5,
 
  setStep: (step: number) => set({ activeStep : step}) , 
}));
