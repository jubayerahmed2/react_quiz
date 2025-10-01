import useQuiz from "../hooks/useQuiz";

const Options = ({ currentQuiz }) => {
  return (
    <>
      {/* TODO */}
      {/* <p className="text-end mb-2 text-xs text-gray-500">
        Multiple choose question
      </p> */}

      <div className="grid grid-cols-2 gap-5 ">
        {currentQuiz.options.map((option) => (
          <Option key={option} option={option} currentQuiz={currentQuiz} />
        ))}
      </div>
    </>
  );
};

const Option = ({ option, currentQuiz }) => {
  const { handleSelectOption, status } = useQuiz();

  const selectedOption =
    currentQuiz.selected && option === currentQuiz.selected;

  const isCorrect = currentQuiz.selected === currentQuiz.answer;

  return (
    <div>
      <div
        key={option}
        className={`border  border-primary/30 shadow py-1 px-2 rounded-sm text-lg text-gray-300 ${
          selectedOption && "bg-primary"
        } 
        ${status !== "result" && "cursor-pointer"}
        ${status == "result" && currentQuiz.answer === option && "bg-primary"}
        ${
          status == "result" &&
          option === currentQuiz.selected &&
          currentQuiz.answer !== option &&
          "bg-red-500"
        }
        `}
        onClick={() => {
          if (status !== "result") {
            handleSelectOption(currentQuiz.id, option);
          }
        }}
      >
        <span> {option} </span>
      </div>
      {status === "result" &&
        option === currentQuiz.selected &&
        (isCorrect ? (
          <span className="text-xs mt-1 text-green-600">
            You choosed this option. This is correct
          </span>
        ) : (
          <span className="text-xs mt-1 text-red-400">
            You choosed this option. This is Incorrect
          </span>
        ))}

      {status === "result" &&
        option !== currentQuiz.selected &&
        currentQuiz.answer === option && (
          <span className="text-xs mt-1 text-green-500">
            You haven't choosed this option. This is correct
          </span>
        )}
    </div>
  );
};

export default Options;
