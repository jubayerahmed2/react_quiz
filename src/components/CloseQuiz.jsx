import { FaX } from "react-icons/fa6";
import useModal from "../hooks/useModal";

const CloseQuiz = () => {
  const { setShowQuiz } = useModal();

  return (
    <div
      className="absolute top-2 right-2 cursor-pointer"
      onClick={() => {
        setShowQuiz(false);
      }}
    >
      <FaX />
    </div>
  );
};
export default CloseQuiz;
