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
      <Box bg="#00020470" minHeight="100vh" color="white">
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
        {movieLoaded ? <Loader /> : <MovieDetails />}
      </Box>
      <WatchListModal />
    </ChakraProvider>
  );
}

export default App;
