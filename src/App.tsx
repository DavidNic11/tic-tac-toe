import "./App.css";
import Board from "./components/Board";
import Score, { StoreContextProvider } from "./components/Score";

function App() {
  return (
    <StoreContextProvider>
      <div className="app">
        <Board />
        <Score />
      </div>
    </StoreContextProvider>
  );
}

export default App;
