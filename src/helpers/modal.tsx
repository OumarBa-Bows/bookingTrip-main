import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
 
interface AppModalProps {
    textButton : string;
title : string;
description:string;
childrenContent: React.ReactNode;
footerChildren?:React.ReactNode
}


export default function AppModal({textButton,
    title,
    description,
    childrenContent,
    footerChildren} : AppModalProps) {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">{textButton}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
           {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            {childrenContent}
        </div>
        <DialogFooter>
           {footerChildren}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
