import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const HelpCenterSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Container maxWidth="md">
      <TextField
        id="search"
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{
          width: { lg: 600, sm: 500, xs: "100%" },
          background: "#fff",
          borderRadius: "10px",
          border: "0px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default HelpCenterSearch;
