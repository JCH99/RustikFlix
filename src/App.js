import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import getEndpoint from "./utils/getEndpoint";
import getFilteredMovies from "./utils/getFilteredMovies";
import RatingSelector from "./components/RatingSelector";
import NoResults from "./components/NoResults";
import Loading from "./components/Loading";
import MovieList from "./components/MovieList";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [rating, setRating] = useState(0);

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const getMovies = useCallback(async (query = "") => {
    console.log("CALLING!!");
    setLoading(true);
    const response = await fetch(getEndpoint(query));
    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
  }, []);

  // INITIAL REQUEST
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  // DEBOUNCED SEARCH REQUEST
  useEffect(() => {
    const timeout = setTimeout(() => {
      getMovies(searchText);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [getMovies, searchText]);

  // CLIENT-SIDE FILTERING
  const filteredMoviesByRating = getFilteredMovies(movies, rating);

  return (
    <>
      <Header searchText={searchText} handleTextChange={handleTextChange} />
      <div className="xl:container mx-auto px-2 py-8 space-y-8">
        <RatingSelector
          rating={rating}
          handleRatingChange={handleRatingChange}
        />
        {loading ? (
          <Loading />
        ) : filteredMoviesByRating.length > 0 ? (
          <MovieList movies={filteredMoviesByRating} />
        ) : (
          <NoResults />
        )}
      </div>
    </>
  );
}

export default App;
