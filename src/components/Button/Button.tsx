import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";

interface ButtonProps extends RadixButtonProps {
  w?: string;
  h?: string;
  width?: string;
  height?: string;
  m?: string;
  margin?: string;
  colorScheme?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  const customProps = { ...rest };
  const customStyle: React.CSSProperties = { ...rest.style };

  // Custom style
  if (rest.colorScheme) {
    customStyle.color = rest.colorScheme;
  }
  if (rest.w || rest.width) {
    customStyle.width = rest.w || rest.width;
  }
  if (rest.h || rest.height) {
    customStyle.height = rest.h || rest.height;
  }
  if (rest.m || rest.margin) {
    customStyle.margin = rest.m || rest.margin;
  }

  // Custom props
  if (rest.isActive) {
    customProps.disabled = false;
  }
  if (rest.isDisabled) {
    customProps.disabled = true;
  }
  if (rest.isLoading) {
    customProps.loading = true;
  }

  const newProps = {
    ...customProps,
    style: customStyle,
  };

  return <RadixButton {...newProps}>{children}</RadixButton>;
};

export default Button;
