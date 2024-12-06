import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";
import React from "react";
export interface ButtonProps extends RadixButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  rest.style = {
    cursor: "pointer",
    ...rest.style,
  };
  return (
    <RadixButton {...rest}>
      {React.isValidElement(rest.leftIcon) && rest.leftIcon}
      {children}
      {React.isValidElement(rest.rightIcon) && rest.rightIcon}
    </RadixButton>
  );
};

export default Button;
