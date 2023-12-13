import React from "react";

export type ResultScreenProps = {
  score: number;
  onClick: () => void;
};

const ResultScreen = ({ score, onClick }: ResultScreenProps) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-8xl font-bold">Math Quiz</h1>
          <p className="py-6 text-lg">
            Your Score: <b>{score}</b>
          </p>
          <button className="btn btn-primary btn-lg" onClick={onClick}>
            Play again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
