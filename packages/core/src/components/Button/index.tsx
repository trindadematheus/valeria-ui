import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fill?: "normal" | "ghost" | "outline";
  size?: "normal" | "medium";
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "normal",
    fill = "normal",
    fullWidth,
    isLoading,
    disabled,
  } = props;

  return (
    <>
      <S.Wrapper
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled || isLoading}
        fill={fill}
      >
        {isLoading ? "loading..." : children}
      </S.Wrapper>
    </>
  );
}

Button.displayName = "Button";

export { Button };
