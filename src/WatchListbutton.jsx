import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { MdPlaylistPlay, MdMenu } from "react-icons/md"; // Use MdMenu for the menu icon
import { useMovies } from "./helper/customHook";

function WatchListButton() {
  const { handleWatchlistToggle } = useMovies();

  const isSmallScreen = useBreakpointValue({ base: true, sm: false });

  return isSmallScreen ? (
    <Box position="absolute" top="1rem" right="1rem">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdMenu />}
          variant="outline"
          size="md"
          sx={{
            color: "#fcfafa",
            border: "1px solid blue",
          }}
        />
        <MenuList>
          <MenuItem onClick={handleWatchlistToggle} icon={<MdPlaylistPlay />}>
            View Watchlist
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  ) : (
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
