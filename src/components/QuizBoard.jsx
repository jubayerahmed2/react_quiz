import useQuiz from "../hooks/useQuiz";
import CloseQuiz from "./CloseQuiz";
import Options from "./Options";
import PrevNext from "./PrevNext";
import Question from "./Question";
import RemainingQuiz from "./RemainingQuiz";

const QuizBoard = () => {
  const { currentQuiz, status } = useQuiz();

  const { id, question } = currentQuiz;

  return (
    <div
      key={id}
      className="w-3xl mx-auto bg-black/20 h-[450px] shadow-lg shadow-gray-600/10 p-5 rounded-md mt-5   relative"
    >
      <CloseQuiz />
      <div className="flex justify-between items-center gap-3 mb-5">
        <Question id={id} question={question} />
        <RemainingQuiz />
      </div>

      {status === "result" && (
        <div>
          <h2 className=" font-semibold text-gray-400">Answer Details</h2>
          <p className="text-sm text-gray-400 mt-1  mb-5">
            {currentQuiz.answerDetails}
          </p>
        </div>
      )}

      <Options currentQuiz={currentQuiz} />
      <PrevNext id={id} />
    </div>
  );
};
export default QuizBoard;
