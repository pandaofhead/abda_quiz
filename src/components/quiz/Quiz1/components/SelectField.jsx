import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleCatrgoryChange, handleDifficultyChange, handleTypeChange } from "../redux/actions";

const SelectField = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCatrgoryChange(event.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(event.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(event.target.value));
        break;
      case "Amount":
        dispatch(handleTypeChange(event.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Box mt={3} width="100%">
        <FormControl fullWidth color="info">
          <InputLabel>{label}</InputLabel>
          <Select value={value} label={label} onChange={handleChange}>
            {options.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectField;
