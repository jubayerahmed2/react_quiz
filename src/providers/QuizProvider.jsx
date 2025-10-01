import { createContext, useState } from "react";
import { reactQuestions } from "../data/data";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(reactQuestions);
  const [currentQuizId, setCurrentQuizId] = useState(questions[0].id);
  const [status, setStatus] = useState("quiz"); // 'quiz', 'result'

  const currentQuiz = questions.find((q) => q.id === currentQuizId);

  const handleCurrentQuiz = (quizId) => {
    setCurrentQuizId(quizId);
  };

  const handleStatus = (nextStatus) => {
    setStatus(nextStatus);
  };

  const handleSelectOption = (quizId, selectedOption) => {
    const quiz = questions.find((q) => q.id === quizId);

    let nextQuestions;

    if (quiz.selected === selectedOption) {
      nextQuestions = questions.map((question) => {
        return question.id === quizId
          ? { ...question, selected: null }
          : question;
      });
    } else {
      nextQuestions = questions.map((question) => {
        return question.id === quizId
          ? { ...question, selected: selectedOption }
          : question;
      });
    }

    setQuestions(nextQuestions);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuiz,
        handleCurrentQuiz,
        status,
        handleStatus,
        handleSelectOption,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
