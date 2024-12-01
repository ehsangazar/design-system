import { Button as RadixButton } from "@radix-ui/themes";
import { ButtonProps } from "./Button.d";

const Button = ({ children, ...props }: ButtonProps) => (
  <RadixButton {...props}>{children}</RadixButton>
);

export default Button;
