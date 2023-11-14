import React from "react";
import "./quiz1.css";
import Settings from "./Setting";
import Questions from "./Questions";
import FinalScreen from "./FinalScreen";
import { Box, Container } from "@mui/material";
import { Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";



const QuizGame = () => {
  return (
    <>
    <Provider store={store}>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
      </Provider>
    </>
  );
};
export default QuizGame;
