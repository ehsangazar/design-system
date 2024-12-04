import { Grid as RadixGrid } from "@radix-ui/themes";
import type { GridProps as RadixGridProps } from "@radix-ui/themes";
import React from "react";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
export interface GridProps extends Omit<RadixGridProps, "size" | "display"> {
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

const Grid = ({ children, ...rest }: GridProps) => {
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
  if (["grid", "inline-grid"].includes(rest.display || "")) {
    customDisplay = rest.display as RadixGridProps["display"];
  }

  if (["flex", "inline-flex"].includes(rest.display || "")) {
    return <Flex {...newProps}>{children}</Flex>;
  }

  if (["block", "inline", "inline-block"].includes(rest.display || "")) {
    return <Box {...newProps}>{children}</Box>;
  }

  return (
    <RadixGrid {...newProps} display={customDisplay}>
      {children}
    </RadixGrid>
  );
};

export default Grid;
