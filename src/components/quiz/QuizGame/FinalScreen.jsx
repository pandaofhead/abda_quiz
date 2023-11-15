import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Box, Button } from "@mui/material";
import { handleScoreChange} from "./redux/actions";
import { useNavigate } from "react-router-dom";

const FinalScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {score} = useSelector((state) => state);
    const handleBackToSetting = () => {
        dispatch(handleScoreChange(0));
        navigate('/quiz/1')
    }
    return (
        <>
        <h1>
            Final Score {score}/5
        </h1>
        <h2>
            {score > 3 ? "You are doing great!" : "Better Luck Next Time :)"}
        </h2>
        <Box>
            <Button variant="contained" color="error" onClick={handleBackToSetting} mt={5} size="large">
                Play Again
            </Button>
        </Box>
        </>
    );
}

export default FinalScreen;