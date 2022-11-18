import { useMemo, useState } from 'react';

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

  const [sort, setSort] = useState("All");

  const showAnswer = (topic, key) => {
    setShow(current => {
      return {
        ...current,
        [topic]: {
          ...current[topic],
          [key]: !current[topic][key]
        }
      }
    })
  }

  const questionAnswer = (obj, topic) => {
    return Object.entries(obj).map(([innerKey, value]) => {
      const containerCls = `${(!show[topic][innerKey]) ? 'content' : ' content expand'}`
      return (
        <Paper className="paper-element" elevation={9} key={topic+innerKey}>
          <div>
            <div>{value.question()}</div>
            <Button onClick={() => showAnswer(topic, innerKey)}>{(!show[topic][innerKey]) ? 'show answer' : 'hide answer'}</Button>
          </div>
          {show[topic][innerKey] && <div className={containerCls}>{value.answer()}</div>}
        </Paper>
      )
    })
  }

  const display = () => {
    return (
      Object.keys(questions).map((topic) => {
        return (topic === sort || sort === "All") && (
          <div key={topic}>
            <h2 className="topic">{topic}</h2>
            <div className="questions-container">
              {questionAnswer(questions[topic], topic)}
            </div>
          </div>
        )
      })
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Interview Questions</h1>
        <select onChange={(e) => setSort(e.target.value)}>
          <option>All</option>
          <option>Javascript</option>
          <option>React</option>
          <option>Html</option>
          <option>Css</option>
          <option>Network</option>
        </select>
      </header>
      {display()}
    </div>
  )
}

export default App
