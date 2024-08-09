import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ShowMovies from "./ShowMovies";
import { useMovies } from "./PostProvider";
import InputEl from "./InputEl";
import Loader from "./Loader";
import HandlePage from "./HandlePage";
import Errorbox from "./Errorbox";
import MovieDetails from "./MovieDetails";
import { useDisclosure } from "@chakra-ui/react";

function App() {
  const {
    isLoading,
    searchMovie,
    selectedMovie,
    selectedMovieData,
    setSelectedMovie,
    movieLoaded,
    setWatchList,
    watchList,
    movie,
  } = useMovies();

  const [hasSearched, setHasSearched] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const theme = extendTheme({
    fonts: {
      heading: `'Roboto', sans-serif`,
      body: `'Roboto', sans-serif`,
    },
  });

  useEffect(() => {
    if (searchMovie.length > 0) {
      setHasSearched(true);
    }
  }, [searchMovie]);

  useEffect(() => {
    if (selectedMovie) {
      onOpen();
    }
  }, [selectedMovie, onOpen]);

  useEffect(() => {
    const getMoviesData = JSON.parse(localStorage.getItem("wishlist"));
    setWatchList(getMoviesData);
  });

  const handleClose = () => {
    onClose();
    setSelectedMovie(null);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg="#0002047d" minHeight="100vh" color="white">
        <InputEl />
        <Box pt="80px">
          {isLoading ? (
            <Loader />
          ) : searchMovie.length > 0 ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {searchMovie.map((movie) => (
                  <ShowMovies key={movie.imdbID} movie={movie} />
                ))}
              </div>
            </>
          ) : hasSearched ? (
            <Errorbox />
          ) : null}
        </Box>
        <HandlePage />
        {movieLoaded ? (
          <Loader />
        ) : (
          <MovieDetails
            isOpen={isOpen}
            onClose={handleClose}
            selectedMovieData={selectedMovieData}
          />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
