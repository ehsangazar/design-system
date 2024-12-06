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

const Card = ({ children, ...rest }: CardProps) => {
  let className = `${rest.className} GazCard GazCard--${rest.bg} `;
  if (rest.hoverEnabled) {
    className += `GazCard--hover GazCard--${rest.bg}--hover`;
  }

  return (
    <RadixCard className={className} {...rest}>
      {children}
    </RadixCard>
  );
};

export default Card;
