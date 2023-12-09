import React from "react";

export type MainMenuProps = {
  onClick: () => void;
};

const MainMenu = ({ onClick }: MainMenuProps) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-8xl font-bold">Math Quiz</h1>
          <p className="py-6 text-lg">Ready to test your math skills?</p>
          <button className="btn btn-primary btn-lg" onClick={onClick}>
            Play now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
