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
  Flex,
} from "@chakra-ui/react";
import { BiX } from "react-icons/bi";

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
                    <>
                      <Box>
                        <h3
                          style={{
                            fontWeight: "bold",
                            marginBottom: "5px",
                            maxWidth: "165px",
                          }}
                        >
                          {movie.Title}
                        </h3>
                        <p> {movie.Year}</p>
                        <p style={{ color: "gray.400", marginTop: "2px" }}>
                          Genre: {movie.Genre}
                        </p>
                        <p style={{ color: "gray.400", marginTop: "2px" }}>
                          Writer: {movie.Writer}
                        </p>
                      </Box>
                    </>
                  </Box>
                  <Button
                    leftIcon={<Icon as={BiX} boxSize={6} />}
                    colorScheme="pink"
                    variant="ghost"
                    onClick={() => onDeleteMovie(movie.imdbID)}
                    size="md"
                    _hover={{
                      bg: "pink.600",
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
