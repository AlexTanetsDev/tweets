import { GlobalStyles } from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Tweets } from "../pages/Tweets";
import { Home } from "../pages/Home";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
