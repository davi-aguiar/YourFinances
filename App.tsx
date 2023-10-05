import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";

import { THEME } from "./src/theme";
import { Routes } from "@routes/index";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </NativeBaseProvider>
  );
}
