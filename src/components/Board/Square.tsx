import type { BoardSquareValues } from "./interfaces";

import styles from "./Square.module.css";

interface BoardSquareProps {
  selectSquare: () => void;
  value: BoardSquareValues;
}

const Square = ({ selectSquare, value }: BoardSquareProps) => {
  return (
    <div className={styles.square} onClick={() => selectSquare()}>
      {value}
    </div>
  );
};

export default Square;
