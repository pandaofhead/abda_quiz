import './App.css';
import { Routes, Route } from 'react-router-dom';
import Quiz1 from './components/quiz/Quiz1/Quiz1';
import Home from './components/home/Home';
import MyNavbar from './components/navbar/Navbar';
import Quiz2 from './components/quiz/Quiz2';

const App = () => {
  return <>
  <MyNavbar />
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quiz/1/*" element={<Quiz1 />} />
      <Route path="/quiz/2" element={<Quiz2 />} />
      <Route path="/quiz/3" element={<h1>Quiz 3</h1>} />
      <Route path="/quiz/4" element={<h1>Quiz 4</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
  
  </>;
};

export default App;