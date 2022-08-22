import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import getEndpoint from "./utils/getEndpoint";
import getFilteredMovies from "./utils/getFilteredMovies";
import RatingSelector from "./components/RatingSelector";
import MovieList from "./components/MovieList";
import FeedbackSnackbar from "./components/FeedbackSnackbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState(0);
  const [errorSnackbar, setErrorSnackbar] = useState({
    open: false,
    message: "",
  });

  const openErrorSnackbarHandler = (message) => {
    setErrorSnackbar({ open: true, message: message });
  };

  const closeErrorSnackbarHandler = () => {
    setErrorSnackbar({ open: false, message: "" });
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClearTextfield = (event) => {
    setSearchText("");
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const getMovies = useCallback(async (query = "") => {
    try {
      setLoading(true);
      const response = await fetch(getEndpoint(query));
      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      openErrorSnackbarHandler("There is an error, please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  const DEBOUNCE_TIME = 1500;
  // DEBOUNCED SEARCH REQUEST // includes initial request
  useEffect(() => {
    //instantaneous initial charge. debounce on text search.
    if (searchText !== "") {
      const timeout = setTimeout(() => {
        getMovies(searchText);
      }, DEBOUNCE_TIME);

      return () => clearTimeout(timeout);
    } else {
      getMovies();
    }
  }, [getMovies, searchText]);

  // CLIENT-SIDE FILTERING
  const filteredMoviesByRating = getFilteredMovies(movies, rating);

  return (
    <>
      <Header
        searchText={searchText}
        handleTextChange={handleTextChange}
        handleClearTextfield={handleClearTextfield}
      />
      <div className="xl:container mx-auto px-2 py-8 space-y-8">
        <RatingSelector
          rating={rating}
          handleRatingChange={handleRatingChange}
        />
        <MovieList loading={loading} movies={filteredMoviesByRating} />
      </div>
      <FeedbackSnackbar
        open={errorSnackbar.open}
        message={errorSnackbar.message}
        closeHandler={closeErrorSnackbarHandler}
        severity={"error"}
      />
    </>
  );
}

export default App;
