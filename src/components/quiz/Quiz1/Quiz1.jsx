import React from "react";
import "./quiz1.css";
import Settings from "./Setting";
import Questions from "./Questions";
import FinalScreen from "./FinalScreen";
import { Box, Container } from "@mui/material";
import { Routes, Route} from "react-router-dom";
const Quiz1 = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/finalscreen" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};
export default Quiz1;
