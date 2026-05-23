import { useState, useEffect } from "react";
import GameSession from "../components/GameSession";

const API_URL = import.meta.env.VITE_API_URL;


function Game() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const response = await fetch(`${API_URL}/questions`);
      const data = await response.json();
      setQuestions(data);
      setIsLoading(false);
    }
    loadQuestions();
  }, []);

  return (
    <div>
      <h2>Quiz</h2>
      <GameSession questions={questions}/>
    </div>
  );
}

export default Game;