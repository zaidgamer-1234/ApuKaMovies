import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";

export const PostContext = createContext();

function PostProvider({ children }) {
  const [movie, setMovie] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [selectedMovieData, setSelectedMovieData] = useState({});
  const [movieLoaded, setMovieLoaded] = useState(false);
  const [watchList, setWatchList] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchMovie = useCallback(
    async (pageNum = 1) => {
      if (!movie) return;

      setIsLoading(true);

      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${movie}&apikey=dc2b1092&page=${pageNum}`
        );
        setSearchMovie(response.data.Search || []);
        console.log(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults, 10) || 0);
        setIsLoading(false);
      } catch (err) {
        console.log("Error occurred while fetching data", err.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [movie]
  );

  useEffect(() => {
    const handlePress = (e) => {
      if (e.key === "Enter") fetchMovie(page);
    };

    document.addEventListener("keydown", handlePress);

    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [fetchMovie, page]);

  useEffect(() => {
    if (searchMovie.length > 0) {
      setHasSearched(true);
    }
  }, [searchMovie, setHasSearched]);

  useEffect(() => {
    const getMoviesData = JSON.parse(localStorage.getItem("watchlist"));
    setWatchList(getMoviesData);
  }, [setWatchList]);

  useEffect(() => {
    if (selectedMovie) {
      onOpen();
    }
  }, [selectedMovie, onOpen]);

  const handlePageChange = (event, value) => {
    setPage(value);
    fetchMovie(value);
  };

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

  const handleWatchlistToggle = () => {
    setShowWatchlist(!showWatchlist);
  };
  return (
    <PostContext.Provider
      value={{
        movie,
        setMovie,
        searchMovie,
        isLoading,
        error,
        page,
        totalResults,
        handlePageChange,
        selectedMovie,
        setSelectedMovie,
        selectedMovieData,
        setSelectedMovieData,
        movieLoaded,
        setMovieLoaded,
        watchList,
        setWatchList,
        hasSearched,
        setHasSearched,
        isOpen,
        onOpen,
        onClose,
        handleDeleteMovie,
        handleClose,
        handleWatchlistToggle,
        showWatchlist,
        setShowWatchlist,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function useMovies() {
  const movies = useContext(PostContext);
  return movies;
}

export default PostProvider;
export { useMovies };
