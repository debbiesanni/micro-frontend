import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.scss";
import PDPcontent from "./PDPcontent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <Routes>
      <Route exact path="/product/:id" element={<PDPcontent />} />
    </Routes>
    <Footer />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);



// import React, { Suspense, useState } from "react";
// import ReactDOM from "react-dom";

// import "./index.scss";

// import Footer from "home/Footer";
// const Header = React.lazy(() => import("home/Header"));
// const App = () => {
//   const [showHeader, setShowHeader] = useState(false);
//   return (
//     <div className="mt-10 text-3xl mx-auto max-w-6xl">
//       {showHeader && (
//         <Suspense fallback={<div>Loading...</div>}>
//           <Header />
//         </Suspense>
//       )}
//       <button
//         className="p-5 text-3xl"
//         onClick={() => setShowHeader(!showHeader)}
//       >
//         Show the Header
//       </button>

//       <div className="my-10">PDP Page Contenet</div>
//       <Footer />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("app"));
