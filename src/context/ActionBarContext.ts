import React, { useContext } from "react";
import { createContext, ReactNode, useState } from "react";

interface ActionBarContextProps {
  isHeaderVisible: boolean;
  setHeaderVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isPreviewVisible: boolean;
  setPreviewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isStatusBarVisible: boolean;
  setStatusBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ActionBarContext = createContext<
  ActionBarContextProps | undefined
>(undefined);

export function ActionBarContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [isPreviewVisible, setPreviewVisible] = useState(true);
  const [isStatusBarVisible, setStatusBarVisible] = useState(true);

  const value = {
    isHeaderVisible,
    setHeaderVisible,
    isPreviewVisible,
    setPreviewVisible,
    isStatusBarVisible,
    setStatusBarVisible,
  };

  return React.createElement(ActionBarContext.Provider, { value }, children);
}

export const useActionBarContext = () => {
  const context = useContext(ActionBarContext);
  if (context === undefined) throw new Error();
  return context;
};
