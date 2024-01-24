import type { Direction, PaletteMode } from "@mui/material";

export type Layout = "horizontal" | "vertical";
export type NavColor = "blend-in" | "discreet" | "evident";
export type I18n = "en" | "fr" | "ro" | "zh"; // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
export type Contrast = "normal" | "high";

export type PresetColor =
  | "default"
  | "theme1"
  | "theme2"
  | "theme3"
  | "theme4"
  | "theme5"
  | "theme6"
  | "theme7"
  | "theme8";

export type FontFamily =
  | `'Open Sans', sans-serif`
  | `'Inter', sans-serif`
  | `'Poppins', sans-serif`
  | `'Roboto', sans-serif`
  | `'Public Sans', sans-serif`;

export interface Settings {
  presetColor: PresetColor;
  contrast: Contrast;
  direction: Direction;
  fontFamily: FontFamily;
  i18n: I18n;
  layout: Layout;
  navColor: NavColor;
  paletteMode: PaletteMode; // Either dark or light

  defaultPath: string;
  responsiveFontSizes: boolean;
  stretch: boolean;
  container: boolean;
}

export interface OptionalSettings {
  presetColor?: PresetColor;
  contrast?: Contrast;
  direction?: Direction;
  fontFamily?: FontFamily;
  i18n?: I18n;
  layout?: Layout;
  navColor?: NavColor;
  paletteMode?: PaletteMode; // Either dark or light

  defaultPath?: string;
  responsiveFontSizes?: boolean;
  stretch?: boolean;
  container?: boolean;
}
