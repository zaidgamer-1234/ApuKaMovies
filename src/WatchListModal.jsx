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
  IconButton,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

function WatchListModal({ isOpen, onClose, watchList = [], onDeleteMovie }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
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
                  alignItems="center"
                  justifyContent="space-between"
                  gap="4"
                  boxShadow="lg"
                >
                  <Box display="flex" alignItems="center" gap="4">
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{
                        borderRadius: "8px",
                        width: "120px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <Box>
                      <h3 style={{ fontWeight: "bold", marginBottom: "5px" }}>
                        {movie.Title}
                      </h3>
                      <p>{movie.Year}</p>
                      <p style={{ color: "gray.400", marginTop: "2px" }}>
                        {movie.Genre}
                      </p>
                      <p style={{ color: "gray.400", marginTop: "2px" }}>
                        Rating: {movie.Ratings[0].Value}
                      </p>
                    </Box>
                  </Box>
                  <IconButton
                    aria-label="Delete movie"
                    icon={<MdDelete />}
                    colorScheme="red"
                    variant="outline"
                    onClick={() => onDeleteMovie(movie.imdbID)}
                    size="sm"
                    _hover={{ bg: "red.600", color: "white" }}
                    _active={{ bg: "red.700" }}
                  />
                </Box>
              ))
            ) : (
              <p>No movies in your watchlist</p>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default WatchListModal;
