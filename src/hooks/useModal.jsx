import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

const useModal = () => {
  return useContext(ModalContext);
};
export default useModal;
