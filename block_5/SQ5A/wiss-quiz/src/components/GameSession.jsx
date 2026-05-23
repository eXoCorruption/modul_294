import { useState } from 'react';
import Button from './Button';

function GameSession({ questions = [] }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  if (!questions || questions.length === 0) {
    return <div>Keine Fragen verfügbar</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (selectedAnswer) => {
    setIsAnswered(true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setFeedback("Richtig!");
      setScore(score + 1);
    } else {
      setFeedback(`Falsch! Richtige Antwort: ${currentQuestion.correctAnswer}`);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback(null);
      setIsAnswered(false);
    }
  };

  return (
    <div>
      <p>Punkte: {score}</p>
      <h2>{currentQuestion.text}</h2>

      <div>
        {currentQuestion.answers.map((answer) => (
          <Button
            key={answer}
            text={answer}
            onClick={() => handleAnswerClick(answer)}
            disabled={isAnswered}
          />
        ))}
      </div>

      {feedback && <p>{feedback}</p>}
      {isAnswered && currentQuestionIndex < questions.length - 1 && (
        <Button text="Nächste Frage" onClick={handleNext} />
      )}
    </div>
  );
}

export default GameSession;
