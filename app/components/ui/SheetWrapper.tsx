import { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../ui/sheet";
import { DialogTitle } from "./dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type SheetWrapperType = {
  ButtonTrigger: ReactNode;
  children: ReactNode;
};

export default function SheetWrapper({
  children,
  ButtonTrigger,
}: SheetWrapperType) {
  return (
    <Sheet>
      <SheetTrigger className='flex cursor-pointer flex-col space-y-1 bg-transparent hover:bg-transparent'>
        {ButtonTrigger}
      </SheetTrigger>

      <SheetContent className='bg-black/90 text-white pr-8 ' side={"right"}>
        <SheetDescription>
          <VisuallyHidden>Description goes here</VisuallyHidden>
        </SheetDescription>
        <DialogTitle></DialogTitle>
        {children}
      </SheetContent>
    </Sheet>
  );
}
