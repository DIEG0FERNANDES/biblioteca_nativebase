import * as React from "react";
import { NativeBaseProvider } from "native-base";
import Home from "./src/pages";

export default function App() {
  return (
    <NativeBaseProvider >
      <Home />
    </NativeBaseProvider>
  );
}