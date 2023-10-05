import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useTheme, Box } from "native-base";
import { AuthRoutes } from "./auth.routes";
export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.green["200"];

  return (
    <Box flex={1} bg="green.200">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
