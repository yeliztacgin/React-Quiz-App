import React, { useState, useEffect } from 'react';
import '../App.css'; // CSS dosyasını import ettik
import { useNavigate } from 'react-router-dom'

const Easy = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correct_answer;
    if (isCorrect) {
      setScore(prevScore => ({ ...prevScore, correct: prevScore.correct + 1 }));
    } else {
      setScore(prevScore => ({ ...prevScore, incorrect: prevScore.incorrect + 1 }));
    }
    setUserAnswer(answer);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setUserAnswer('');
      }, 1000); // 1 saniye bekleme
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div className="quiz-container">
        <div className="result-box">
          <h1>Quiz Finished</h1>
          <p>Correct Answers: {score.correct}</p>
          <p>Incorrect Answers: {score.incorrect}</p>
        </div>
        <button onClick={() => navigate('/Easy')}>Retry</button> {/* Retry butonu quiz bitince gösteriliyor */}
        <button onClick={() => navigate('/')}>Return to Home</button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="quiz-container">Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="quiz-container">
      <div className="question-box">
        <h1>Question {currentQuestionIndex + 1}</h1>
        <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></p>
      </div>
      <div className="answers-box">
        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((answer, index) => (
          <button key={index} className="answer-button" onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Easy;
