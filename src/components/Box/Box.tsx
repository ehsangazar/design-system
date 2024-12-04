import { Box as RadixBox } from "@radix-ui/themes";
import type { BoxProps as RadixBoxProps } from "@radix-ui/themes";
import React from "react";
import Flex from "../Flex/Flex";
import Grid from "../Grid/Grid";
export interface BoxProps extends Omit<RadixBoxProps, "size" | "display"> {
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
  display?: string;
}

const Box = ({ children, ...rest }: BoxProps) => {
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

  const newProps = {
    ...customProps,
    style: customStyle,
  };

  let customDisplay = undefined;
  if (["block", "inline", "inline-block"].includes(rest.display || "")) {
    customDisplay = rest.display as RadixBoxProps["display"];
  }

  if (["flex", "inline-flex"].includes(rest.display || "")) {
    return <Flex {...newProps}>{children}</Flex>;
  }

  if (["grid", "inline-grid"].includes(rest.display || "")) {
    return <Grid {...newProps}>{children}</Grid>;
  }

  return (
    <RadixBox {...newProps} display={customDisplay}>
      {children}
    </RadixBox>
  );
};

export default Box;
