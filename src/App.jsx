import "./App.scss";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Characters />
      </GlobalProvider>
    </>
  );
}

export default App;
