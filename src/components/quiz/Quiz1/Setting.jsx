import { Box, Button } from "@mui/material";
import SelectField from "./components/SelectField";
import TextFieldComp from "./components/TextFieldComp";

const Settings = () => {

    const handleSumbit = (event) => {
        event.preventDefault();
    }
  return (
    <>
      <h1>
        Quiz App
      </h1>
      <div>
        <form onSubmit={handleSumbit}>
            <SelectField label='Category'/>
            <SelectField label='Difficulty'/>
            <SelectField label='Type'/>
            <TextFieldComp/>
            <Box mt={3} width='100%'>
                
                <Button fullWidth type="submit" variant="contained" color="error">
                    Start
                </Button>
            </Box>
        </form>
      </div>
    </>
  );
};

export default Settings;
