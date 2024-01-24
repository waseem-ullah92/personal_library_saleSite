"use client";

import { useContext } from "react";
import { SettingsContext } from "@context";

// ==============================|| CONFIG - HOOKS  ||============================== //

export const useConfig = () => useContext(SettingsContext);
