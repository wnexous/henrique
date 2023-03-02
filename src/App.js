import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MobileNavMenu from "./layout/MobileNavMenu";
import responsive from "./functions/Responsive";
import { useEffect, useState } from "react";

function App() {
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    responsive({ min: 800, setState: setMobile });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header mobile={mobile} />
        <main>
          <Routes>
            <Route element={<Home />} path={"/"} />
          </Routes>
        </main>
        <MobileNavMenu mobile={mobile} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
