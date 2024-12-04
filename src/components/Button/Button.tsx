import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";

export interface ButtonProps extends RadixButtonProps {
  w?: string;
  h?: string;
  width?: string;
  height?: string;
  m?: string;
  p?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mx?: string;
  my?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  px?: string;
  py?: string;
  padding?: string;
  margin?: string;
  colorScheme?: RadixButtonProps["color"];
  size: RadixButtonProps["size"] | "xs" | "sm" | "md" | "lg" | "xl";
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  rightIcon: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  const customProps = { ...rest };
  const customStyle: React.CSSProperties = { ...rest.style };

  // Custom style
  if (rest.w || rest.width) {
    customStyle.width = rest.w || rest.width;
  }
  if (rest.h || rest.height) {
    customStyle.height = rest.h || rest.height;
  }
  if (rest.m || rest.margin) {
    customStyle.margin = rest.m || rest.margin;
  }
  if (rest.p || rest.padding) {
    customStyle.padding = rest.p || rest.padding;
  }
  if (rest.mt) {
    customStyle.marginTop = rest.mt;
  }
  if (rest.mr) {
    customStyle.marginRight = rest.mr;
  }
  if (rest.mb) {
    customStyle.marginBottom = rest.mb;
  }
  if (rest.ml) {
    customStyle.marginLeft = rest.ml;
  }
  if (rest.mx) {
    customStyle.marginLeft = rest.mx;
    customStyle.marginRight = rest.mx;
  }
  if (rest.my) {
    customStyle.marginTop = rest.my;
    customStyle.marginBottom = rest.my;
  }
  if (rest.pt) {
    customStyle.paddingTop = rest.pt;
  }
  if (rest.pr) {
    customStyle.paddingRight = rest.pr;
  }
  if (rest.pb) {
    customStyle.paddingBottom = rest.pb;
  }
  if (rest.pl) {
    customStyle.paddingLeft = rest.pl;
  }
  if (rest.px) {
    customStyle.paddingLeft = rest.px;
    customStyle.paddingRight = rest.px;
  }
  if (rest.py) {
    customStyle.paddingTop = rest.py;
    customStyle.paddingBottom = rest.py;
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
  if (rest.colorScheme) {
    customProps.color = rest.colorScheme;
    delete customProps.colorScheme;
  }

  let newSize = undefined;
  if (rest.size) {
    if (rest.size === "xs") customProps.size = "1";
    if (rest.size === "sm") customProps.size = "2";
    if (rest.size === "md") customProps.size = "3";
    if (rest.size === "lg") customProps.size = "4";
    if (rest.size === "xl") customProps.size = "4";
    newSize = rest.size as RadixButtonProps["size"];
  }

  const newProps = {
    ...customProps,
    size: newSize,
    style: customStyle,
  };

  return (
    <RadixButton {...newProps}>
      {children}
      {rest.rightIcon}
    </RadixButton>
  );
};

export default Button;
