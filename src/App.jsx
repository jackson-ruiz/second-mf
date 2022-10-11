import React from "react";
import ReactDOM from "react-dom";
import SamplePage from "microf1/SamplePage";
import "./index.scss";
import { LocalPage } from "./pages/LocalPage";

const App = () => (
  <>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: microf2</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
    <hr className="mt-10" />
    <h4 className="text-center mt-2">PAGE FROM EXTERNAL FRONTEND</h4>
    <SamplePage />
    <hr className="mt-10" />
    <h4 className="text-center mt-2">PAGE FROM INTERNAL SOURCE</h4>
    <LocalPage />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
