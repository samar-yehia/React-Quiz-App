import React from "react";

const Question = ({ title, answers }) => {
  // props: element elgaya men l parent component
  return (
    <div className="Question">
      <h1>{title}</h1>
      {/* <p>Answers: {answers}</p> */}
    </div>
  );
};

export default Question;
