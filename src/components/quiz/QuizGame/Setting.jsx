import { Box, Button, CircularProgress } from "@mui/material";
import SelectField from "./components/SelectField";
import TextFieldComp from "./components/TextFieldComp";
import useAxios from "./hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  if (loading)
    return (
      <Box mt={2}>
        <CircularProgress />
      </Box>
    );
  if (error) return <div>Something went wrong</div>;
  const handleSumbit = (event) => {
    event.preventDefault();
    navigate("/quiz/1/questions");
  };

  const selectedCategories = response.trivia_categories.filter(
    (category) =>
      category.name === "Entertainment: Music" || category.name === "Sports"
  );

  const difficultyOption = [
    { id: "ease", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOption = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True / False" },
  ];

  return (
    <>
      <h1>Quiz Game</h1>
      <div>
        <form onSubmit={handleSumbit}>
          <SelectField options={selectedCategories} label="Category"/>
          <SelectField options={difficultyOption} label="Difficulty" />
          <SelectField options={typeOption} label="Type" />
          <Box mt={3} width="100%">
            <Button fullWidth type="submit" variant="contained" color="error">
              Get Started
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Settings;
