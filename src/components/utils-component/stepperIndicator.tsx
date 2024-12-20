import { Separator } from "@/components/ui/separator";
import { splitNumberToArrayOfNumber } from "@/hooks/utils";
import clsx from "clsx";
import { Check } from "lucide-react";
import React, { Fragment } from "react";

interface StepperIndicatorProps {
  activeStep: number;
  stepperLength :number
}

const StepperIndicator = ({ activeStep , stepperLength }: StepperIndicatorProps) => {
 
  return (
    <div className="flex justify-center items-center">
      {splitNumberToArrayOfNumber(stepperLength)?.map((step) => (
        <Fragment key={step}>
          <div
            className={clsx(
              "w-[40px] h-[40px] flex justify-center items-center m-[5px] border-[2px] rounded-full",
              step < activeStep && "bg-primary text-white",
              step === activeStep && "border-primary text-primary"
            )}
          >
            {step >= activeStep ? step : <Check className="h-5 w-5" />}
          </div>
          {step !== stepperLength && (
            <Separator
              orientation="horizontal"
              className={clsx(
                "w-[100px] h-[2px]",
                step <= activeStep - 1 && "bg-primary"
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default StepperIndicator;
