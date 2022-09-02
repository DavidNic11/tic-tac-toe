import { useScore } from "./scoreContext";

import styles from "./Score.module.css";

const Score = () => {
  const { xWins, oWins } = useScore();

  return (
    <div className={styles.scoreContainer}>
      <h2>Number of Wins</h2>
      <h3 className={styles.scoreText}>X: {xWins}</h3>
      <h3 className={styles.scoreText}>O: {oWins}</h3>
    </div>
  );
};

export default Score;
