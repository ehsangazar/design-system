/** @jsxImportSource @emotion/react */
import { Card as RadixCard } from "@radix-ui/themes";
import type { CardProps as RadixCardProps } from "@radix-ui/themes";
import backgroundHandler from "../../utils/backgroundHandler";
import styled from "@emotion/styled";

import { CSSObject } from "@emotion/react";

export interface CardProps extends RadixCardProps {
  bg?:
    | "gray"
    | "gray-light"
    | "gray-medium"
    | "gray-dark"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass";
  sx?: CSSObject;
}

const StyledCard = styled(RadixCard)<CardProps>(({ sx, bg }) => ({
  backgroundColor: backgroundHandler(bg),
  ...sx,
}));

const Card = ({ children, sx, ...rest }: CardProps) => {
  return (
    <StyledCard sx={sx} {...rest}>
      {children}
    </StyledCard>
  );
};

export default Card;
