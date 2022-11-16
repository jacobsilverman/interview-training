import { useState } from 'react';

import { questions } from "./Constants/Questions.jsx";
import { Button, Paper } from '@mui/material';

import "./App.css";

function App() {
  const [show, setShow] = useState({
    "Javascript": {},
    "React": {},
    "Css": {},
    "Html": {},
    "Network": {}
  });

  const showAnswer = (topic, key) => {
    console.log(show[topic][key]);
    setShow(current => {
      return {
        ...current,
        [topic]: {
          [key]: !current[topic][key]
        }
      }
    });
  }

  const questionAnswer = (obj, topic) => {
    return Object.entries(obj).map(([innerKey, value]) => {
      return (
        <Paper className="paper-element" elevation={9} key={topic+innerKey}>
          <div>
            <h3>{value.question()}</h3>
            <Button onClick={() => showAnswer(topic, innerKey)}>{(!show[topic][innerKey]) ? 'show answer' : 'hide answer'}</Button>
          </div>
          
          {show[topic][innerKey] && <div className="content">{value.answer()}</div>}
        </Paper>
      )
    })
  }

  const display = () => {
    return (
      Object.keys(questions).map((key) => {
        return (
          <div key={key}>
            <h2 className="topic">{key}</h2>
            {questionAnswer(questions[key], key)}
          </div>
        )
      })
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Interview Questions</h1>
      </header>
      {display()}
    </div>
  )
}

export default App
