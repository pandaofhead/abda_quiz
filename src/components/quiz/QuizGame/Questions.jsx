
import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAxios from "./hooks/useAxios";
import { handleScoreChange } from "./redux/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    score,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=5`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/quiz/1/score');
    }
  };

  return (
    <Box>
      <h1>Quiz {questionIndex + 1}</h1>
      <h2>
        {decode(response.results[questionIndex].question)}
      </h2>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <h2>
        Score: {score} / {response.results.length}
      </h2>
    </Box>
  );
};

export default Questions;