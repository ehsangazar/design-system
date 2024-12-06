import { Card as RadixCard } from "@radix-ui/themes";
import type { CardProps as RadixCardProps } from "@radix-ui/themes";
import backgroundHandler from "../../utils/backgroundHandler";
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

const Card = ({ children, ...rest }: CardProps) => {
  rest.style = {
    ...rest.style,
    backgroundColor: backgroundHandler(rest.bg),
  };
  return <RadixCard {...rest}>{children}</RadixCard>;
};

export default Card;
