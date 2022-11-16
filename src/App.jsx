import "./App.css";
import { questions } from "./Constants/Questions.jsx";
import { Paper } from '@mui/material';

function App() {
  const questionAnswer = (obj) => {
    return Object.entries(obj).map(([innerKey, value]) => {
      return (
        <Paper className="paper-element" elevation={9} key={innerKey}>
          <h3>{value.question()}</h3>
          <div className="content">{value.answer()}</div>
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
            {questionAnswer(questions[key])}
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
