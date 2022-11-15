import { ReactNode } from "react";
import { Wrapper } from "./styles";

function Button({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: string;
}) {
  return <Wrapper className={variant}>{children}</Wrapper>;
}

export default Button;
