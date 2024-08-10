import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useMovies } from "./PostProvider";
import ShowMovies from "./ShowMovies";
import InputEl from "./InputEl";
import Loader from "./Loader";
import HandlePage from "./HandlePage";
import Errorbox from "./Errorbox";
import MovieDetails from "./MovieDetails";
import WatchListModal from "./WatchListModal";

function App() {
  const {
    isLoading,
    searchMovie,
    selectedMovie,
    selectedMovieData,
    setSelectedMovie,
    movieLoaded,
    watchList,
    setWatchList,
  } = useMovies();

  const [hasSearched, setHasSearched] = useState(false);
  const [showWatchlist, setShowWatchlist] = useState(false);
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
    const getMoviesData = JSON.parse(localStorage.getItem("watchlist"));
    setWatchList(getMoviesData);
  }, [setWatchList]);

  const handleDeleteMovie = (imdbID) => {
    const existingWatchList = JSON.parse(localStorage.getItem("watchlist"));
    const filterList = existingWatchList.filter(
      (movie) => movie.imdbID !== imdbID
    );
    localStorage.setItem("watchlist", JSON.stringify(filterList));

    setWatchList((list) => list.filter((movie) => movie.imdbID !== imdbID));
  };
  const handleClose = () => {
    onClose();
    setSelectedMovie(null);
  };

  const handleWatchlistToggle = (e) => {
    setShowWatchlist(!showWatchlist);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg="#00020470" minHeight="100vh" color="white">
        <InputEl handleWatchlistToggle={handleWatchlistToggle} />
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
      <WatchListModal
        isOpen={showWatchlist}
        onClose={handleWatchlistToggle}
        watchList={watchList}
        onDeleteMovie={handleDeleteMovie}
      />
    </ChakraProvider>
  );
}

export default App;
