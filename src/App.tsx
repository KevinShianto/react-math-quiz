import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import MainMenu from "./components/games/MainMenu";
import Loading from "./components/games/Loading";

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
      ) : (
        <></>
      )}
    </MainLayout>
  );
}

export default App;
