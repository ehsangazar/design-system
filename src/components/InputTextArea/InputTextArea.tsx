import { TextArea as RadixInputTextArea } from "@radix-ui/themes";
import React from "react";

const InputTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<typeof RadixInputTextArea>
>((props, ref) => {
  return <RadixInputTextArea ref={ref} {...props} />;
});

export default InputTextArea;
