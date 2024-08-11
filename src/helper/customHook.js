import { useContext } from "react";
import { PostContext } from "../PostProvider";

function useMovies() {
  const movies = useContext(PostContext);
  return movies;
}

export { useMovies };
