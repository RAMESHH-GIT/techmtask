import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function SearchInput({ filterQuery, setFilterQuery, onChange }) {
  const handleFilterChange = (event) => {
    setFilterQuery(event.target.value);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        label="Filter by Username"
        variant="outlined"
        // style={{ width: '60%' }} // Adjust the width as needed
        value={filterQuery}
        onChange={handleFilterChange}
      />
    </Grid>
  );
}

export default SearchInput;
