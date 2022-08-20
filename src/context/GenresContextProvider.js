import { useState, useEffect, createContext } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const genresEndpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const GenresContext = createContext({
  getGenre: (id) => {},
});

const GenresContextProvider = (props) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getStaticGenres = async () => {
      const response = await fetch(genresEndpoint);
      const data = await response.json();
      setGenres(data.genres);
    };
    getStaticGenres();
  }, []);

  const getGenre = (id) => {
    let genre;
    if (genres.length > 0) {
      genre = genres.find((genre) => genre.id === id);
    }

    return genre; //returns undefined if it is not found among the genders or the service is not available.
  };

  const context = {
    getGenre,
  };

  return (
    <GenresContext.Provider value={context}>
      {props.children}
    </GenresContext.Provider>
  );
};

export default GenresContextProvider;
