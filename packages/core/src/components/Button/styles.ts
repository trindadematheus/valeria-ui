import { styled } from "@valeria-ui/styles";

const disabledStyle = {
  background: "$neutral-gray-7",
  color: "$neutral-gray-3",

  cursor: "not-allowed",

  "&:hover": {
    background: "$neutral-gray-7",
    color: "$neutral-gray-3",
  },
};

export const Wrapper = styled("button", {
  background: "$brand-primary-main",
  color: "$neutral-light",

  border: "1px solid transparent",

  padding: "8px 16px",
  borderRadius: "$medium",
  fontSize: "$1x",
  cursor: "pointer",
  transition: "$base",

  "&:hover": {
    background: "$brand-primary-hover",
    color: "$neutral-gray-7",
  },

  variants: {
    variant: {
      primary: {},
      secondary: {
        background: "$brand-secondary-main",
        color: "$neutral-gray-1",

        "&:hover": {
          background: "$brand-secondary-hover",
          color: "$neutral-gray-1",
        },
      },
    },
    size: {
      normal: {},
      medium: {
        fontSize: "$3x",
        padding: "10px 18px",
      },
    },
    disabled: {
      true: {},
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    fill: {
      normal: {},
      ghost: {},
      outline: {},
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      fill: "ghost",
      css: {
        background: "transparent",
        color: "$brand-primary-main",
      },
    },
    {
      variant: "primary",
      fill: "outline",
      css: {
        background: "transparent",
        color: "$brand-primary-main",
        border: "1px solid $brand-primary-main",
      },
    },

    {
      variant: "secondary",
      fill: "ghost",
      css: {
        background: "transparent",
        color: "$brand-secondary-main",
      },
    },
    {
      variant: "secondary",
      fill: "outline",
      css: {
        background: "transparent",
        color: "$brand-secondary-main",
        border: "1px solid $brand-secondary-main",
      },
    },

    {
      variant: "primary",
      disabled: true,
      css: disabledStyle,
    },
    {
      variant: "secondary",
      disabled: true,
      css: disabledStyle,
    },
    {
      variant: "outline",
      disabled: true,
      css: disabledStyle,
    },
    {
      variant: "ghost",
      disabled: true,
      css: disabledStyle,
    },
  ],
});
