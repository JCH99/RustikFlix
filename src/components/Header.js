import React from "react";
import morpheus from "../images/morpheus.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";

const Header = (props) => {
  const { searchText, handleTextChange } = props;
  return (
    <header className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] bg-gray-900 flex justify-center items-end">
      <div className="h-64 sm:h-96 md:h-[30rem] lg:h-[40rem] flex justify-center relative">
        <img src={morpheus} alt="Morpheus hero" />
        <form className="absolute bottom-6">
          <TextField
            id="movie-search"
            label="Search..."
            value={searchText}
            onChange={handleTextChange}
            variant="filled"
            className="bg-white rounded-lg overflow-hidden"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
