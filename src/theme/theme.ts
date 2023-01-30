import { withDefaultColorScheme, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import colors from "./colors";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const theme = extendTheme(
  {
    config,
    colors,
    font: {
      heading: "InterVariable, sans-serif",
      body: "InterVariable, sans-serif",
      styles: {
        global: {
          a: {
            color: "teal.500",
            _hover: {
              textDecoration: "none",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "teal" }),
);
