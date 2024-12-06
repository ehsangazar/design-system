import { Card as RadixCard } from "@radix-ui/themes";
import type { CardProps as RadixCardProps } from "@radix-ui/themes";
import backgroundHandler from "../../utils/backgroundHandler";
import styled from "@emotion/styled";
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
}
const StyledCard = styled(RadixCard)<CardProps>`
  background-color: ${(props) => backgroundHandler(props.bg)};
  margin: 0;
`;

const Card = ({ children, ...rest }: CardProps) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
