import { Link as RadixLink } from "@radix-ui/themes";
import type { LinkProps as RadixLinkProps } from "@radix-ui/themes";
import "./Link.css";

const Link = ({ children, ...rest }: RadixLinkProps) => {
  let className = `GazLink`;
  className += ` GazLink--${rest.color}`;

  if (rest.underline === "always") {
    className += ` GazLink--underline`;
  }

  if (rest.underline === "hover") {
    className += ` GazLink--underlineHover`;
  }

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
