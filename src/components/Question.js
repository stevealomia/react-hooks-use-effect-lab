import React, { useState, useEffect} from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  /* const timeRef = useRef(timeRemaining);
  timeRef.current = timeRemaining; */

  // add useEffect code
 useEffect (() => {
   setTimeout(() => {
     return timeRemaining -1
   })

 },1000)

	//When timeRemaining hits 0, reset timeRemaining back to 10 seconds, and call the onAnswered callback prop with a value of false to
	//trigger a behavior on the app component

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
