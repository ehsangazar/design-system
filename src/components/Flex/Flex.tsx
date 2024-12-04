import { Flex as RadixFlex } from "@radix-ui/themes";
import type { FlexProps as RadixFlexProps } from "@radix-ui/themes";
import React from "react";
import Box from "../Box/Box";
import Grid from "../Grid/Grid";
export interface FlexProps extends Omit<RadixFlexProps, "size" | "display"> {
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

const Flex = ({ children, ...rest }: FlexProps) => {
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
  if (["flex", "inline-flex"].includes(rest.display || "")) {
    customDisplay = rest.display as RadixFlexProps["display"];
  }

  if (["block", "inline", "inline-block"].includes(rest.display || "")) {
    return <Box {...newProps}>{children}</Box>;
  }

  if (["grid", "inline-grid"].includes(rest.display || "")) {
    return <Grid {...newProps}>{children}</Grid>;
  }

  return (
    <RadixFlex {...newProps} display={customDisplay}>
      {children}
    </RadixFlex>
  );
};

export default Flex;
