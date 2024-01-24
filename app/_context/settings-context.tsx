"use client";

import type { FC, ReactNode } from "react";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
// @ts-ignore
import { isEqual } from "lodash";
import type { OptionalSettings, Settings } from "@types";
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "@utils";

const STORAGE_KEY = "app.settings";

////////// ***** INTERFACE-START ***** ////////
interface State extends Settings {
  openDrawer: boolean;
  isInitialized: boolean;
}
export interface SettingsContextType extends State {
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  handleReset: () => void;
  handleUpdate: (settings: Settings) => void;
  isCustom: boolean;
}
///////// ***** INTERFACE-END ***** ////////

const initialSettings: Settings = {
  presetColor: "theme1",
  contrast: "normal",
  direction: "ltr",
  fontFamily: `'Open Sans', sans-serif`,
  i18n: "en",
  layout: "vertical",
  navColor: "evident",
  paletteMode: "light",

  defaultPath: "/",
  responsiveFontSizes: true,
  stretch: false,
  container: true,
};

const initialState: State = {
  ...initialSettings,
  isInitialized: false,
  openDrawer: false,
};

export const SettingsContext = createContext<SettingsContextType>({
  ...initialState,
  handleDrawerClose: () => { },
  handleDrawerOpen: () => { },
  handleReset: () => { },
  handleUpdate: () => { },
  isCustom: false,
});

interface SettingsProviderProps {
  children?: ReactNode;
}

export const SettingsProvider: FC<SettingsProviderProps> = (props) => {
  const { children } = props;
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    const restored = getLocalStorage(STORAGE_KEY);

    if (restored) {
      setState((prevState) => ({
        ...prevState,
        ...restored,
        isInitialized: true,
      }));
    }
  }, []);

  const handleReset = useCallback((): void => {
    removeLocalStorage(STORAGE_KEY);
    setState((prevState) => ({
      ...prevState,
      ...initialSettings,
    }));
  }, []);

  const handleUpdate = useCallback((settings: OptionalSettings): void => {
    setState((prevState) => {
      setLocalStorage(STORAGE_KEY, {
        colorPreset: prevState?.presetColor,
        contrast: prevState?.contrast,
        direction: prevState?.direction,
        i18n: prevState?.i18n,
        fontFamily: prevState?.fontFamily,
        layout: prevState?.layout,
        navColor: prevState?.navColor,
        paletteMode: prevState?.paletteMode,

        defaultPath: prevState?.defaultPath,
        responsiveFontSizes: prevState?.responsiveFontSizes,
        stretch: prevState?.stretch,
        container: prevState?.container,
        ...settings,
      });

      return {
        ...prevState,
        ...settings,
      };
    });
  }, []);

  const handleDrawerOpen = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: true,
    }));
  }, []);

  const handleDrawerClose = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: false,
    }));
  }, []);

  const isCustom = useMemo(() => {
    return !isEqual(initialSettings, {
      colorPreset: state?.presetColor,
      contrast: state?.contrast,
      direction: state?.direction,
      i18n: state?.i18n,
      fontFamily: state?.fontFamily,
      layout: state?.layout,
      navColor: state?.navColor,
      paletteMode: state?.paletteMode,

      defaultPath: state?.defaultPath,
      responsiveFontSizes: state?.responsiveFontSizes,
      stretch: state?.stretch,
      container: state?.container,
    });
  }, [state]);

  return (
    <SettingsContext.Provider
      value={{
        ...state,
        handleDrawerClose,
        handleDrawerOpen,
        handleReset,
        handleUpdate,
        isCustom,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
