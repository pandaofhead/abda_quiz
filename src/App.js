import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MyNavbar from "./components/navbar/Navbar";
import Hangman from "./components/quiz/hangman/Hangman";
import QuizGame from "./components/quiz/QuizGame/QuizGame";
import MemoryGame from "./components/quiz/MemoryGame/MemoryGame";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz/1/*" element={<QuizGame />} />
        <Route path="/quiz/2" element={<Hangman />} />
        <Route path="/quiz/3" element={<MemoryGame />} />
        <Route path="/quiz/4" element={<h1>Quiz 4</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
