import Header from "./components/Header";
import QuizBoard from "./components/QuizBoard";
import Start from "./components/Start";
import useModal from "./hooks/useModal";
import QuizProvider from "./providers/QuizProvider";

const Page = () => {
  const { showQuiz } = useModal();

  return (
    <div key={showQuiz}>
      <Header />
      <QuizProvider>{showQuiz ? <QuizBoard /> : <Start />}</QuizProvider>
    </div>
  );
};
export default Page;
