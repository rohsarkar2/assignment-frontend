import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "../node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Navbar from "./components/Navbar/Navbar";
import TopComponent from "./components/main-component/MainComponent";
import { MiddleComponent } from "./components/middle-component/MiddleComponent";

function App() {
  return (
    <>
      <Navbar />
      <TopComponent />
      <MiddleComponent />
    </>
  );
}

export default App;
