import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    green: {
      300: "#36D275",
      200: "#00FF67"
    },
    black: {
      900: "#000000"
    },
    white: "#FFFFFF",
    red: {
      600: "#E60000"
    },
    purple: {
      800: "#74005A"
    }
  },
  fonts: {
    poppinsBold: "Roboto_700Bold",
    poppinsRegular: "Roboto_400Regular"
  },
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20
  }
});
