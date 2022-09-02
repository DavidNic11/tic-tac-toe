import Board from "./components/Board";
import Score, { StoreContextProvider } from "./components/Score";

import styles from "./App.module.css";

function App() {
  return (
    <StoreContextProvider>
      <h1 className={styles.appHeader}>Tic Tac Toe</h1>
      <div className={styles.app}>
        <Board />
        <Score />
      </div>
    </StoreContextProvider>
  );
}

export default App;
