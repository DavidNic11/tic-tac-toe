import React, { createContext, useContext, useState } from "react";

interface ScoreContext {
  xWins: number;
  oWins: number;
  addXWin: () => void;
  addOWin: () => void;
}

export const ScoreContext = createContext<ScoreContext | null>(null);

export const useScore = () => {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error("Cannot use useScore outside of the ScoreProvider");
  }

  return context;
};

export const StoreContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);

  return (
    <ScoreContext.Provider
      value={{
        xWins,
        oWins,
        addXWin: () => setXWins((old) => old + 1),
        addOWin: () => setOWins((old) => old + 1),
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
