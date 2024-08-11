import { Button } from "@chakra-ui/react";
import { MdPlaylistPlay } from "react-icons/md";
import { useMovies } from "./helper/customHook";

function WatchListButton() {
  const { handleWatchlistToggle } = useMovies();
  return (
    <Button
      onClick={handleWatchlistToggle}
      ml={4}
      leftIcon={<MdPlaylistPlay />}
      colorScheme="yellow"
      variant="solid"
      size="md"
      borderRadius="full"
      _hover={{ transform: "scale(1.05)", boxShadow: "0 0 10px yellow" }}
      _active={{ transform: "scale(0.95)" }}
    >
      View Watchlist
    </Button>
  );
}

export default WatchListButton;
