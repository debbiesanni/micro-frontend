import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";
import "./index.scss";

const App = () => (
  <div className=" text-3xl mx-auto max-w-6xl">
    <Header />
    <HomeContent/>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
