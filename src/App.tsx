import Header from "./components/header";
import { MotionContainerTop } from "./components/MotionContainerTop";
import "./styles/globals.sass";

function App() {
  return (
    <div className="App">
      <Header />

      <MotionContainerTop>
        <div
          style={{
            background: "lightblue",
            width: "100%",
            height: "calc(100vh - 6rem)",
            border: "2px solid black",
          }}
        >
          <div>
            <h2>Olá,</h2> <h3>Eu sou o Robson F. Martins</h3>
            <button>ver projetos</button>
          </div>

          <div>
            <img src="" alt="" />
          </div>
        </div>
      </MotionContainerTop>
    </div>
  );
}

export default App;
