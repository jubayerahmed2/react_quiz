import Page from "./Page";
import { ModalProvider } from "./providers/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <Page />
    </ModalProvider>
  );
}

export default App;
