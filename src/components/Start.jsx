import useModal from "../hooks/useModal";

const Start = () => {
  const { setShowQuiz } = useModal();

  return (
    <div className="flex flex-col justify-center h-full mt-32 w-full items-center">
      <h2 className="text-3xl mb-4">Welcome to React Quiz</h2>
      <button onClick={() => setShowQuiz(true)}>Start Quiz</button>
    </div>
  );
};
export default Start;
