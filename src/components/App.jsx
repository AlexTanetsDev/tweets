import { GlobalStyles } from "./GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Tweets } from "../pages/Tweets";
import { Home } from "../pages/Home";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
