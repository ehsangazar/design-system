import { Link as RadixLink } from "@radix-ui/themes";
import type { LinkProps as RadixLinkProps } from "@radix-ui/themes";
import "./Link.css";

const Link = ({ children, ...rest }: RadixLinkProps) => {
  rest.style = {
    cursor: "pointer",
    textDecoration: rest?.underline ? "underline" : "none",
    textDecorationThickness: "3px",
    ...rest.style,
  };

  let className = `GazLink`;
  className += ` GazLink--${rest.color}`;

  if (rest.className) {
    className += ` ${rest.className}`;
  }

  return (
    <RadixLink className={className} {...rest}>
      {children}
    </RadixLink>
  );
};

export default Link;
