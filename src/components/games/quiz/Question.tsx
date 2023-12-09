import React from "react";

export type QuestionProps = {
  children: React.ReactNode;
};

const Question = ({ children }: QuestionProps) => {
  return (
    <div className="rounded-lg px-12 py-4 bg-neutral-content text-neutral text-8xl">
      {children}
    </div>
  );
};

export default Question;
