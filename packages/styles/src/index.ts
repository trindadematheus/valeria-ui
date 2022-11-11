import { createStitches, globalCss } from "@stitches/react";

const { styled } = createStitches({
  theme: {
    colors: {
      "brand-primary-main": "#445900",
      "brand-primary-border": "#9BA285",
      "brand-primary-focus": "#C1C8AA",
      "brand-primary-hover": "#2D3B00",
      "brand-primary-pressed": "#222c00",

      "brand-secondary-main": "#E7FF54",
      "brand-secondary-border": "#FBFFA9",
      "brand-secondary-focus": "#F7FFE0",
      "brand-secondary-hover": "#B3D40F",
      "brand-secondary-pressed": "#445900",

      "neutral-dark": "#090909",
      "neutral-light": "#f7f7f7",
      "neutral-gray-1": "#424242",
      "neutral-gray-2": "#616161",
      "neutral-gray-3": "#757575",
      "neutral-gray-4": "#c2c2c2",
      "neutral-gray-5": "#e0e0e0",
      "neutral-gray-6": "#ededed",
      "neutral-gray-7": "#f5f5f5",

      "state-info": "#013686",
      "state-success": "#21725e",
      "state-warning": "#ffd600",
      "state-danger": "#ae0303",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      "1x": "12px",
      "2x": "14px",
      "3x": "16px",
      "4x": "20px",
      "5x": "28px",
      "6x": "36px",
    },
    fonts: {
      // inter: "Inter",
    },
    fontWeights: {
      medium: "400",
      regular: "300",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      base: "4px",
      medium: "8px",
    },
    shadows: {
      2: " 0px 2px 4px rgba(0, 0, 0, 0.12)",
      4: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      6: "0px 6px 12px rgba(0, 0, 0, 0.1)",
      8: "0px 8px 16px rgba(0, 0, 0, 0.08)",
    },
    zIndices: {},
    transitions: {
      base: "all 400ms",
    },
  },
});

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    border: "none",
  },
});

export { styled, globalStyles };
