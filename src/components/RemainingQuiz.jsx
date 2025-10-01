import useQuiz from "../hooks/useQuiz";

const calcCorrectAnswerPercentage = (questions) => {
  let totalCorrect = 0;

  for (let a = 0; a < questions.length; a++) {
    if (questions[a].selected === questions[a].answer) {
      totalCorrect++;
    }
  }
  return Math.floor((totalCorrect / questions.length) * 100);
};

const CorrectAnswerPercentage = ({ questions }) => {
  const CA = calcCorrectAnswerPercentage(questions);

  const color = CA > 75 ? "text-green-500" : "text-red-400";

  return (
    <div
      className={`${color} bg-black p-2 rounded-sm flex justify-center items-center font-bold`}
    >
      {CA}%
    </div>
  );
};

const RemainingQuiz = () => {
  const { questions, currentQuiz, status } = useQuiz();

  const totalQuestion = questions.length;
  const currentQuizNumber = currentQuiz.id;

  return (
    <div className="flex gap-2">
      <div className="p-3 rounded-sm bg-black/20 ">
        {currentQuizNumber}/{totalQuestion}
      </div>

      {status == "result" && <CorrectAnswerPercentage questions={questions} />}
    </div>
  );
};

export default RemainingQuiz;
