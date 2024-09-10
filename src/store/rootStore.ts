import React, { createContext, ReactNode, useContext } from "react";
import diary from "./note";

class RootStore {
  noteStore = diary;
}

const rootStore = new RootStore();
const RootStoreContext = createContext(rootStore);

export const useStore = () => useContext(RootStoreContext);

export function RootStoreContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return React.createElement(
    RootStoreContext.Provider,
    { value: rootStore },
    children
  );
}
