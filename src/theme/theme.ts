import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const theme = extendTheme({ config, colors });
