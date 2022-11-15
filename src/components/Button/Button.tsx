import { ReactNode } from "react";
import { Wrapper } from "./styles";

function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: {
  children: ReactNode;
  variant?: string;
  type?: any;
  onClick?: any;
}) {
  return (
    <Wrapper onClick={onClick} className={variant} type={type}>
      {children}
    </Wrapper>
  );
}

export default Button;
