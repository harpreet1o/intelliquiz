import InputComponent from "../components/InputComponent";
import QuizComponent from "../components/QuizComponent";
import Result from "../components/Result";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<InputComponent />} />
        <Route path="/attempt" element={<QuizComponent />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default Home;
