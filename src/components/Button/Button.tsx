import { Button as RadixButton } from "@radix-ui/themes";
import type { ButtonProps as RadixButtonProps } from "@radix-ui/themes";
import React from "react";
export interface ButtonProps extends Omit<RadixButtonProps, "size"> {
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
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
    if (rest.size === "xs") newSize = "1";
    if (rest.size === "sm") newSize = "2";
    if (rest.size === "md") newSize = "3";
    if (rest.size === "lg") newSize = "4";
    if (rest.size === "xl") newSize = "4";
    newSize = newSize as RadixButtonProps["size"];
  }

  const newProps = {
    ...customProps,
    size: newSize,
    style: customStyle,
  };

  return (
    <RadixButton {...newProps}>
      {React.isValidElement(rest.leftIcon) && rest.leftIcon}
      {children}
      {React.isValidElement(rest.rightIcon) && rest.rightIcon}
    </RadixButton>
  );
};

export default Button;
