import { useMovies } from "./helper/customHook";
import { BiX } from "react-icons/bi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

function WatchListModal() {
  const { showWatchlist, watchList, handleDeleteMovie, handleWatchlistToggle } =
    useMovies();

  const imgWidth = useBreakpointValue({
    base: "80px",
    sm: "100px",
    md: "120px",
  });
  const imgHeight = useBreakpointValue({
    base: "100px",
    sm: "130px",
    md: "150px",
  });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "center", md: "center" });

  return (
    <Modal isOpen={showWatchlist} onClose={handleWatchlistToggle} size="lg">
      <ModalOverlay />
      <ModalContent bg="#1a202c" color="white">
        <ModalHeader>Your Watchlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" flexDirection="column" gap="4">
            {Array.isArray(watchList) && watchList.length > 0 ? (
              watchList.map((movie) => (
                <Box
                  key={movie.imdbID}
                  bg="#2d3748"
                  borderRadius="md"
                  p="4"
                  mb="4"
                  display="flex"
                  flexDirection={flexDirection}
                  alignItems="center"
                  justifyContent="space-between"
                  gap="4"
                  boxShadow="lg"
                >
                  <Box
                    display="flex"
                    flexDirection={flexDirection}
                    alignItems="center"
                    gap="4"
                  >
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{
                        borderRadius: "8px",
                        width: imgWidth,
                        height: imgHeight,
                        objectFit: "cover",
                      }}
                    />
                    <Box textAlign={textAlign}>
                      <Text fontWeight="bold" mb="2">
                        {movie.Title}
                      </Text>
                      <Text>{movie.Year}</Text>
                      <Text color="gray.400" mt="2">
                        Genre: {movie.Genre}
                      </Text>
                      <Text color="gray.400" mt="2">
                        Writer: {movie.Writer}
                      </Text>
                    </Box>
                  </Box>
                  <Button
                    leftIcon={<Icon as={BiX} boxSize={6} />}
                    colorScheme="red"
                    variant="ghost"
                    onClick={() => handleDeleteMovie(movie.imdbID)}
                    size="md"
                    _hover={{
                      bg: "red.600",
                      color: "white",
                      transform: "scale(1.05)",
                      boxShadow: "md",
                    }}
                    _active={{
                      bg: "pink.700",
                      transform: "scale(1)",
                      boxShadow: "lg",
                    }}
                    borderRadius="full"
                    px={6}
                  >
                    Delete
                  </Button>
                </Box>
              ))
            ) : (
              <Text>No movies in your watchlist</Text>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={handleWatchlistToggle}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default WatchListModal;
