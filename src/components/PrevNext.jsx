import useQuiz from "../hooks/useQuiz";

const PrevNext = ({ id }) => {
  const { handleCurrentQuiz, questions, handleStatus, status } = useQuiz();
  const isAllQuizCompleted = questions.findIndex((q) => q.selected == null);

  const isLastQuestion = questions[questions.length - 1].id == id;

  const handleSubmitQuiz = () => {
    if (!confirm("Are you sure to submit the Quiz?")) {
      console.log("You canceled to submit quiz");
    } else {
      handleStatus("result"); // this means quiz is done, its time to show result
    }
  };

  return (
    <div className=" flex justify-between mt-5">
      {id !== 1 && (
        <button onClick={() => handleCurrentQuiz(id - 1)}>Previous</button>
      )}

      {!isLastQuestion && (
        <button onClick={() => handleCurrentQuiz(id + 1)}>Next</button>
      )}

      {isLastQuestion && status !== "result" && (
        <button
          onClick={handleSubmitQuiz}
          className={isAllQuizCompleted >= 0 ? "bg-gray-500" : ""}
        >
          Submit
        </button>
      )}
    </div>
  );
};
export default PrevNext;
