import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { children } = props;

  return (
    <>
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
}

Button.displayName = "Button";

export { Button };
