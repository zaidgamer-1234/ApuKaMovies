import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useMovies } from "./helper/customHook";
import ShowMovies from "./ShowMovies";
import InputEl from "./InputEl";
import Loader from "./Loader";
import HandlePage from "./HandlePage";
import Errorbox from "./Errorbox";
import MovieDetails from "./MovieDetails";
import WatchListModal from "./WatchListModal";

function App() {
  const { isLoading, searchMovie, movieLoaded, hasSearched } = useMovies();

  const theme = extendTheme({
    fonts: {
      heading: `'Roboto', sans-serif`,
      body: `'Roboto', sans-serif`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage="url('/background.avif')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        color="white"
        backdropFilter="blur(10px)"
      >
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
              <HandlePage />
            </>
          ) : hasSearched ? (
            <Errorbox />
          ) : null}
        </Box>
        {movieLoaded ? <Loader /> : <MovieDetails />}
      </Box>
      <WatchListModal />
    </ChakraProvider>
  );
}

export default App;
