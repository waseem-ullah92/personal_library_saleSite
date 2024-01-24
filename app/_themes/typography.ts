// material-ui
import { Theme, TypographyVariantsOptions } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

// types
import { FontFamily } from "@types";

// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (
  mode: PaletteMode,
  fontFamily: FontFamily,
  theme: Theme
): TypographyVariantsOptions => ({
  htmlFontSize: 16,
  fontSize: 14,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    fontSize: "4rem",
  },
  h2: {
    fontWeight: 400,
    fontSize: "3rem",
    letterSpacing: "-0.06rem",
  },
  h3: {
    fontWeight: 400,
    fontSize: "1.875rem",
    // lineHeight: 0.8,
    // letterSpacing: '-0.004rem',
  },
  h4: {
    fontWeight: 400,
    fontSize: "1.25rem",
  },
  h5: {
    fontWeight: 400,
    fontSize: "1rem",
  },
  h6: {
    fontWeight: 400,
    fontSize: "0.875rem",
  },
  caption: {
    fontWeight: 400,
    fontSize: "1.125rem",
  },
  body1: {
    fontSize: "0.875rem",
    lineHeight: 1.57,
  },
  body2: {
    // Can be customized
    fontSize: "0.75rem",
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: "1.875rem",
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: "1.5rem",
    fontWeight: 400,
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: "capitalize",
  },
});

export default Typography;
