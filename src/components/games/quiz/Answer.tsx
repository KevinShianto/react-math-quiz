import React from "react";

export type AnswerProps = {
  onChangeAnswer: (answer: number) => void;
  isWrongAnswer?: boolean;
};

const Answer = ({ onChangeAnswer, isWrongAnswer = false }: AnswerProps) => {
  const handleChangeAnswer = (answer: string) => {
    onChangeAnswer(parseInt(answer) || 0);
  };

  return (
    <div className="gap-4 text-center flex flex-col">
      <span>your answer:</span>
      <input
        type="number"
        className={`input input-ghost w-1/2 text-center focus:input-ghost self-center h-24 text-3xl ${
          isWrongAnswer && "input-error"
        }`}
        autoFocus
        onChange={(e) => handleChangeAnswer(e.target.value)}
      />
      <div className="w-full border-b-2 border-primary"></div>
    </div>
  );
};

export default Answer;
