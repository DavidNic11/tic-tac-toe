import type { BoardSquareValues } from "./interfaces";

import { useState } from "react";

import { useScore } from "../Score";

import { isGameOver, isWinner } from "../../utilities";

const createNewTicTacToeBoard = () => Array(9).fill(null);

export const useTicTacToe = () => {
  const { addXWin, addOWin } = useScore();

  const [board, setBoard] = useState<BoardSquareValues[]>(
    createNewTicTacToeBoard
  );

  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<BoardSquareValues>(null);
  const currentTurn: NonNullable<BoardSquareValues> = isX ? "X" : "O";

  const handleSquareSelect = (selectedSquare: number) => {
    if (board[selectedSquare] || !!winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[selectedSquare] = isX ? "X" : "O";

    setBoard(newBoard);
    setIsX((previousIsXValue) => !previousIsXValue);

    if (isWinner(currentTurn, newBoard)) {
      setWinner(currentTurn);
      if (currentTurn === "X") {
        addXWin();
      } else {
        addOWin();
      }
    }
  };

  const reset = () => {
    setBoard(createNewTicTacToeBoard());
    setIsX(true);
    setWinner(null);
  };

  return {
    board,
    handleSquareSelect,
    reset,
    currentTurn,
    winner,
    isGameOver: isGameOver(board),
  };
};
