import React, { useEffect } from "react";
import Question from "../games/quiz/Question";
import {
  checkQuestionAnswer,
  generateQuestion,
} from "../../helpers/question.helper";
import Answer from "../games/quiz/Answer";
import { useTimer } from "react-use-precision-timer";

const GameScreen = () => {
  const [question, setQuestion] = React.useState(generateQuestion());
  const [score, setScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(30000); // in milliseconds
  const [wrongAnswer, setWrongAnswer] = React.useState(false);

  const timerDelay = 10;
  const timer = useTimer(
    {
      delay: timerDelay,
    },
    () => {
      setTimeLeft((timeleft) => timeleft - timerDelay);
      if (timeLeft <= 0) {
        setTimeLeft(0);
        timer.stop();
      }
    }
  );

  useEffect(() => {
    timer.start();
  }, []);

  const handleAnswerChange = (answer: number) => {
    const result = checkQuestionAnswer(
      `${question.numberOne}${question.operator}${question.numberTwo}`,
      answer
    );
    if (result) correctAnswer();
    else setWrongAnswer(true);
  };

  const correctAnswer = () => {
    setScore((score) => score + 1);
    setWrongAnswer(false);
    setQuestion(generateQuestion());
  };

  const countTimer = () => {
    setInterval(() => {}, 1000);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center max-w-full gap-20 flex-col">
        {/* Header */}
        <div className="flex text-neutral-content place-content-around w-full">
          {/* Todo: timer */}
          <div className="flex flex-col">
            <div className="text-md">Timer:</div>
            <div className="text-8xl">{(timeLeft / 1000).toFixed(0)}</div>
          </div>

          {/* Score */}
          <div className="flex flex-col">
            <div className="text-md">Score:</div>
            <div className="text-8xl">{score}</div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-8">
          <Question>
            {question.numberOne} {question.operator} {question.numberTwo}
          </Question>
          <Answer
            key={`${question.numberOne}${question.operator}${question.numberTwo}`}
            onChangeAnswer={handleAnswerChange}
            isWrongAnswer={wrongAnswer}
          />
        </div>

        {/* Footer */}
        {/* Todo: keyboard legends */}
      </div>
    </div>
  );
};

export default GameScreen;
