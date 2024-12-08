import { Card as RadixCard } from "@radix-ui/themes";
import type { CardProps as RadixCardProps } from "@radix-ui/themes";
import "./Card.css";
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
  hoverEnabled?: boolean;
}

const Card = ({ children, hoverEnabled, ...rest }: CardProps) => {
  let className = `GazCard`;
  if (rest.bg) {
    className += ` GazCard--${rest.bg}`;
  }
  if (hoverEnabled) {
    className += ` GazCard--hover GazCard--${rest.bg}--hover`;
  }
  if (rest.className) {
    className += ` ${rest.className}`;
  }

  return (
    <RadixCard className={className} {...rest}>
      {children}
    </RadixCard>
  );
};

export default Card;
