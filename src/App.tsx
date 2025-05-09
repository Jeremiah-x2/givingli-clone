import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Header from "./components/header";
import { useEffect } from "react";
import AboutPage from "./pages/about";
import ProPage from "./pages/pro";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      {/* <ReactLenis options={{ autoRaf: true }} ref={lenisRef}> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pro" element={<ProPage />} />
        </Routes>
      </BrowserRouter>
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
