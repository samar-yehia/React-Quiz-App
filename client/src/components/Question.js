import React from "react";

const Question = ({ title, correct, answers }) => {
  console.log("answers", answers);
  // props: element elgaya men l parent component
  return (
    <div className="Question">
      <h1>{title}</h1>
      <p>
        {answers.map((answer, index) => {
          return (
            <p key={index}>
              {index + 1}) {answer.text}
            </p>
          );
        })}
      </p>
    </div>
  );
};

export default Question;
