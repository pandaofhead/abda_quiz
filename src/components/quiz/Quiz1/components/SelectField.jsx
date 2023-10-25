import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, {useState}from "react";

const SelectField = (props) => {
    const {label} = props;
    const [value, setValue] = useState('');

    const handleChange = (event) => {}

    return (
        <>
        <Box mt={3} width='100%' >
            <FormControl fullWidth color="info">
                <InputLabel>
                {label}
                </InputLabel>
                <Select>
                    <MenuItem value={value} label={label} onChaneg={handleChange}>Option 1</MenuItem>
                    <MenuItem value={value}>Option 2</MenuItem>
                    <MenuItem value={value}>Option 3</MenuItem>

                </Select>
            </FormControl>
        </Box>
        </>
    );
}

export default SelectField;