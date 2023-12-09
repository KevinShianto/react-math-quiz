import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import MainMenu from "./components/screens/MainMenu";
import Loading from "./components/screens/Loading";
import GameScreen from "./components/screens/GameScreen";

type GamePage = "main-menu" | "game" | "result" | "loading";

function App() {
  const [page, setPage] = React.useState<GamePage>("main-menu");

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
        <GameScreen />
      ) : (
        <></>
      )}
    </MainLayout>
  );
}

export default App;
