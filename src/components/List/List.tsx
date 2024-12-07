import React from "react";
import "./Link.css";

const UL: React.FC<{ children: React.ReactNode }> = ({ children, ...rest }) => {
  return (
    <ul className="Gaz-ul" {...rest}>
      {children}
    </ul>
  );
};

const OL: React.FC<{ children: React.ReactNode }> = ({ children, ...rest }) => {
  return (
    <ol className="Gaz-ol" {...rest}>
      {children}
    </ol>
  );
};

const LI: React.FC<{ children: React.ReactNode }> = ({ children, ...rest }) => {
  return (
    <li className="Gaz-li" {...rest}>
      {children}
    </li>
  );
};

export default { UL, OL, LI };
