import "./App.css";

import WhatsappBtn from "./layout/WhatsappBtn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MobileNavMenu from "./layout/MobileNavMenu";
import responsive from "./functions/Responsive";
import { useEffect, useState } from "react";
import Notfound from "./views/Notfound";

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
            <Route element={<Notfound />} path={"*"} />
          </Routes>
        </main>
        <WhatsappBtn />
        <MobileNavMenu mobile={mobile} />

        <Footer mobile={mobile} />
      </BrowserRouter>
    </div>
  );
}

export default App;
