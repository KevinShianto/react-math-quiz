export const randomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateQuestion = () => {
  const numberOne = randomNumberInRange(1, 100),
    numberTwo = randomNumberInRange(1, 100),
    operatorNumber = randomNumberInRange(1, 2);
  const operator = operatorNumber === 1 ? "-" : "+";
  return { numberOne, numberTwo, operator };
};

export const checkQuestionAnswer = (fullQuestion: string, answer: number) => {
  return eval(fullQuestion) == answer;
};
