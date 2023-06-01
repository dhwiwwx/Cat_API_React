import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main";
import Cats from "./Cats";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/cats" element={<Cats></Cats>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
