import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RootStoreContextProvider } from "./store/rootStore.ts";
import { ActionBarContextProvider } from "./context/ActionBarContext.ts";
import { EditorAreaContextProvider } from "./context/EditorAreaContext.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootStoreContextProvider>
      <ActionBarContextProvider>
        <EditorAreaContextProvider>
          <App />
        </EditorAreaContextProvider>
      </ActionBarContextProvider>
    </RootStoreContextProvider>
  </React.StrictMode>
);
