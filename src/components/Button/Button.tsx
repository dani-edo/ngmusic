import { MouseEventHandler, ReactNode } from "react";
import { Wrapper } from "./styles";

function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: {
  children: ReactNode;
  variant?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <Wrapper onClick={onClick} className={variant} type={type}>
      {children}
    </Wrapper>
  );
}

export default Button;
