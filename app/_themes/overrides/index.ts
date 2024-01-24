// material-ui
import { Theme } from "@mui/material/styles";

// third-party
import { merge } from "lodash";

import IconButton from "./IconButton";

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(IconButton(theme));
}
