import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import MainMenu from "./components/screens/MainMenu";
import Loading from "./components/screens/Loading";
import GameScreen from "./components/screens/GameScreen";
import ResultScreen from "./components/screens/ResultScreen";

type GamePage = "main-menu" | "game" | "result" | "loading";

function App() {
  const [page, setPage] = React.useState<GamePage>("main-menu");
  const [score, setScore] = React.useState<number>(0);

  const changePage = (page: GamePage, timeout = 1000) => {
    setPage("loading");
    setTimeout(() => {
      setPage(page);
    }, timeout);
  };

  return (
    <MainLayout>
      {page === "main-menu" ? (
        <MainMenu onClick={() => changePage("game")} />
      ) : page === "loading" ? (
        <Loading />
      ) : page === "game" ? (
        <GameScreen
          onFinish={(score) => {
            setScore(score);
            changePage("result");
          }}
        />
      ) : (
        <ResultScreen
          score={score}
          onClick={() => changePage("game")}
        ></ResultScreen>
      )}
    </MainLayout>
  );
}

export default App;
