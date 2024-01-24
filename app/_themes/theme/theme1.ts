// types
import { PaletteThemeProps } from "@types";
import { PalettesProps } from "@ant-design/colors";
import { PaletteColorOptions } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

// ==============================|| PRESET THEME - DEFAULT ||============================== //

const Theme1 = (
  colors: PalettesProps,
  mode: PaletteMode
): PaletteThemeProps => {
  const { grey } = colors;
  const greyColors: PaletteColorOptions = {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16],
  };
  const contrastText = "#fff";

  let primaryColors = [
    "#7A5AF8",
    "#ebe7fe",
    "#c4b6fc",
    "#9c85fa",
    "#7554f8",
    "#4e23f6",
    "#3409dc",
    "#2807ab",
    "#7555ef",
    "#502fb4",
  ];
  let secondaryColors = [
    "#1D2939",
    "#101828",
    "#344054",
    "#667085",
    "#D0D5DD",
    "#413757",
    "#11052D",
    "#EAECF0",
    "#EAECF0",
    "#98A2B3",
  ];
  let errorColors = ["#FFE7D3", "#FF805D", "#FF4528", "#DB271D", "#930C1A"];
  let warningColors = ["#FFF6D0", "#FFCF4E", "#FFB814", "#DB970E", "#935B06"];
  let infoColors = ["#DCF0FF", "#7EB9FF", "#549BFF", "#3D78DB", "#1A3D93"];
  let successColors = ["#EAFCD4", "#8AE65B", "#58D62A", "#3DB81E", "#137C0D"];

  if (mode === "dark") {
    primaryColors = [
      "#1c2134",
      "#1f294d",
      "#243462",
      "#273e83",
      "#2c4db0",
      "#305bdd",
      "#567fe9",
      "#80a4f4",
      "#a9c5f8",
      "#d2e2fb",
    ];
    secondaryColors = [
      "#1D2939",
      "#101828",
      "#344054",
      "#667085",
      "#D0D5DD",
      "#413757",
      "#11052D",
      "#EAECF0",
      "#EAECF0",
      "#98A2B3",
    ];
    errorColors = ["#341d1b", "#b03725", "#dd3f27", "#e9664d", "#fbd6c9"];
    warningColors = ["#342a1a", "#83631a", "#dda116", "#e9ba3a", "#fbefb5"];
    infoColors = ["#202734", "#416fb0", "#4c88dd", "#74a8e9", "#ecf4fb"];
    successColors = ["#1f2e1c", "#449626", "#4fba28", "#74cf4d", "#e3fbd2"];
  }

  return {
    primary: {
      lighter: primaryColors[0],
      100: primaryColors[1],
      200: primaryColors[2],
      300: primaryColors[3],
      light: primaryColors[1],
      400: primaryColors[4],
      main: primaryColors[0],
      dark: primaryColors[9],
      700: primaryColors[7],
      darker: primaryColors[8],
      900: primaryColors[9],
      contrastText,
    },
    secondary: {
      lighter: secondaryColors[2],
      100: secondaryColors[7],
      200: secondaryColors[5],
      light: secondaryColors[1],
      400: secondaryColors[4],
      main: secondaryColors[0]!,
      600: secondaryColors[3],
      dark: secondaryColors[0],
      800: secondaryColors[6],
      darker: secondaryColors[0],
      A100: secondaryColors[9],
      A200: secondaryColors[0],
      A300: secondaryColors[0],
      contrastText
    },
    error: {
      lighter: errorColors[0],
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      darker: errorColors[4],
      contrastText,
    },
    warning: {
      lighter: warningColors[0],
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      darker: warningColors[4],
      contrastText: greyColors[100],
    },
    info: {
      lighter: infoColors[0],
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      darker: infoColors[4],
      contrastText,
    },
    success: {
      lighter: successColors[0],
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      darker: successColors[4],
      contrastText,
    },
    grey: greyColors,
  };
};

export default Theme1;
