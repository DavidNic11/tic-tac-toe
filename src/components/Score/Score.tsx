import { useScore } from "./scoreContext";

import styles from "./Score.module.css";

const Score = () => {
  const { xWins, oWins } = useScore();

  return (
    <div className={styles.scoreContainer}>
      <h2>Number of Wins</h2>
      <p className={styles.scoreText}>X: {xWins}</p>
      <p className={styles.scoreText}>O: {oWins}</p>
    </div>
  );
};

export default Score;
