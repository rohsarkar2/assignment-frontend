import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "../node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Navbar from "./components/Navbar/Navbar";
import TopComponent from "./components/main-component/MainComponent";
import { MiddleComponent } from "./components/middle-component/MiddleComponent";
import { BottomComponent } from "./components/bottom-component/BottomComponent";
import { EmailComponent } from "./components/email-component/EmailComponent";
import { FooterComponent } from "./components/footer-component/FooterComponent";
import { LastComponent } from "./components/last-component/LastComponent";

function App() {
  return (
    <>
      <Navbar />
      <TopComponent />
      <MiddleComponent />
      <BottomComponent />
      <EmailComponent />
      <FooterComponent />
      <LastComponent />
    </>
  );
}

export default App;
