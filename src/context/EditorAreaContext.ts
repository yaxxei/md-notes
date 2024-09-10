import React, { useContext } from "react";
import { createContext, ReactNode, useState } from "react";

interface EditorAreaContextProps {
  cursorPosition: ICursorPosition;
  setCursorPosition: React.Dispatch<React.SetStateAction<ICursorPosition>>;
  isList: boolean;
  setList: React.Dispatch<React.SetStateAction<boolean>>;
  orderListNum: number;
  setOrderListNum: React.Dispatch<React.SetStateAction<number>>;
}

interface ICursorPosition {
  start: number;
  end: number;
}

export const EditorAreaContext = createContext<
  EditorAreaContextProps | undefined
>(undefined);

export function EditorAreaContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cursorPosition, setCursorPosition] = useState({
    start: 0,
    end: 0,
  });
  const [isList, setList] = useState(false);
  const [orderListNum, setOrderListNum] = useState(0);

  const value = {
    cursorPosition,
    setCursorPosition,
    isList,
    setList,
    orderListNum,
    setOrderListNum,
  };

  return React.createElement(EditorAreaContext.Provider, { value }, children);
}

export const useEditorAreaContext = () => {
  const context = useContext(EditorAreaContext);
  if (context === undefined) throw new Error();
  return context;
};
