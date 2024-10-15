import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface AppButtonProps {
 textButton : string;
 handleClick ?: VoidFunction;
 [key:string] :any;
 icon?:React.ReactNode;
}

export default function AppButton({textButton , handleClick , icon, ...rest} : AppButtonProps) {
  return (
    <Button onClick={handleClick} {...rest}>
{icon}
        {textButton}
    </Button>
  )
}
