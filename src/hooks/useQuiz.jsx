import { useContext } from "react";
import { QuizContext } from "../providers/QuizProvider";

const useQuiz = () => {
  return useContext(QuizContext);
};
export default useQuiz;
