import "./index.css";

import {
  Testemonial,
  About,
  Footer,
  HeaderApp,
  Skils,
  Work,
} from "./container";
import { Navbar } from "./components/index";

import "./App.scss";
export function App() {
  return (
    <div className="app">
      <Navbar />
      <HeaderApp />
      <About />
      <Work />
      <Skils />
      <Testemonial />
      <Footer />
    </div>
  );
}
