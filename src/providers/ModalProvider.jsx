import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <ModalContext.Provider value={{ showQuiz, setShowQuiz }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
