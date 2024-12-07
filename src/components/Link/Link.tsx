import { Link as RadixLink } from "@radix-ui/themes";
import type { LinkProps as RadixLinkProps } from "@radix-ui/themes";
import "./Link.css";

interface CustomLinkProps extends RadixLinkProps {
  noStyle?: boolean;
}

const Link = ({ children, noStyle, ...rest }: CustomLinkProps) => {
  let className = `GazLink`;

  if (!noStyle) {
    className += ` GazLink--${rest.color}`;

    if (rest.underline === "always") {
      className += ` GazLink--underline`;
    }

    if (rest.underline === "hover") {
      className += ` GazLink--underlineHover`;
    }
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
