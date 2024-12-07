import React from "react";
import { TextField as RadixTextField } from "@radix-ui/themes";

interface InputProps extends React.ComponentProps<typeof RadixTextField.Root> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...rest }, ref) => {
    return (
      <RadixTextField.Root ref={ref} {...rest}>
        {icon && <RadixTextField.Slot>{icon}</RadixTextField.Slot>}
      </RadixTextField.Root>
    );
  }
);

Input.displayName = "Input";

export default Input;
