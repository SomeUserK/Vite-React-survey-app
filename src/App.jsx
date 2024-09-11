/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import './App.css';
import { surveyReducer, TYPES } from './survey-reducer';
import Survey from './Survey';
import { useState } from 'react';

function App() {
  const [newSurvey, setNewSurvey] = useState('');
  const [surveys, dispatch] = useReducer(surveyReducer, []);

  function handleAddSurvey() {
    if (!newSurvey.trim()) return;
    console.log(newSurvey);
    dispatch({ type: TYPES.ADD_SURVEY, payload: newSurvey });
  }
  function handleVote(index) {
    dispatch({ type: TYPES.VOTE, payload: index });
  }
  function handleDelete(index) {
    dispatch({ type: TYPES.DELETE_SURVEY, payload: index });
  }

  return (
    <main className="app">
      <h1>Sas</h1>
      <section>
        <input
          type="text"
          placeholder="question..."
          value={newSurvey}
          onChange={({ target }) => setNewSurvey(target.value)}
        />
        <button onClick={handleAddSurvey}>Add Survey</button>
      </section>
      <ul>
        {surveys.map((survey, i) => (
          <li key={i}>
            <Survey
              question={survey.question}
              votes={survey.votes}
              onClick={() => handleVote(i)}
              deleteOnClick={() => handleDelete(i)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
