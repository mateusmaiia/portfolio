import "./index.css";

import { Testemonial, About, Footer, Header, Skils, Work } from "./container";

export function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Skils />
      <Testemonial />
      <Footer />
    </div>
  );
}
