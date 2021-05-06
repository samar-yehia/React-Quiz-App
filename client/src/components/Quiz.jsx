import React, { useEffect, useState } from "react";
import Question from "./Question";
import { ApiUrl } from "./Constants";

import { Link } from "react-router-dom";

function Quiz() {
  const [questions, setQuestions] = useState([]); //array of objects
  // const [answers, setAnswers] = useState([]);

  useEffect(() => {
    //once this component is rendered (button start now is pressed) useEffect is invoked
    getQuestions();
  }, []);
  // useEffect(() => {
  //   //once this component is rendered (button start now is pressed) useEffect is invoked
  //   getAnswers();
  // }, []);

  const getQuestions = async () => {
    const response = await fetch(`${ApiUrl}:5000/questions`); //to fetch data from server

    const data = await response.json(); //any external request that you are fetching have to be made with async-await to wait for the fetching to be completed because it may take long time
    console.log("response", data); //acts as cout
    setQuestions(data); // Set the fetched data into questions via UseState and update the empty array to be filled with this data
  };
  // const getAnswers = async () => {
  //   const response = await fetch(`${ApiUrl}:5000/questions`); //to fetch data from server

  //   const data = await response.json(); //any external request that you are fetching have to be made with async-await to wait for the fetching to be completed because it may take long time
  //   console.log("response", data); //acts as cout
  //   setAnswers(data); // Set the fetched data into questions via UseState and update the empty array to be filled with this data
  // };

  return (
    <div>
      {/* <h1>Questions Page</h1> */}
      {questions.map((
        question,
        index //loop over the array
      ) => (
        <div>
          <Question
            key={index} // unique key for every item
            title={question.title}
            correct={question.correct}
            answers={question.answers}
          />
        </div>
      ))}

      <div>
        <button className="Previous-Button" style={{ float: "left" }}>
          <Link to="/">Previous</Link>
        </button>
      </div>

      <div>
        <button className="Next-Button" style={{ float: "right" }}>
          <Link to="/">Next</Link>
        </button>
      </div>
    </div>
  );
}
export default Quiz;
