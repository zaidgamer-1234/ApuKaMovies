import {
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

function MovieDetails({ selectedMovieData, isOpen, onClose }) {
  const {
    Poster,
    Title,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Ratings,
    imdbID,
  } = selectedMovieData || {};

  const handleAddToWatchlist = () => {
    const getMovie = JSON.parse(localStorage.getItem("watchlist")) || [];
    const existingMovie = getMovie.some((movie) => movie.imdbID === imdbID);

    if (existingMovie) {
      console.log(`${Title} is already in the watchlist`);
      return;
    }

    const addMovie = [...getMovie, selectedMovieData];
    localStorage.setItem("watchlist", JSON.stringify(addMovie));
    console.log(`${Title} added to watchlist`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent bg="#1a202c" color="white">
        <ModalHeader>{Title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={Poster}
            alt={Title}
            mb="20px"
            borderRadius="md"
            m="10px auto"
          />
          <Text fontSize="lg" mb="10px">
            <strong>Year:</strong> {Year}
          </Text>
          <Text mb="10px">
            <strong>Plot:</strong> {Plot}
          </Text>
          <Text fontSize="md" color="gray.400" mb="10px">
            <strong>Director:</strong> {Director}
          </Text>
          <Text fontSize="md" color="gray.400" mb="10px">
            <strong>Actors:</strong> {Actors}
          </Text>
          <Text fontSize="md" color="gray.400" mb="10px">
            <strong>Genre:</strong> {Genre}
          </Text>
          {Ratings && Ratings[0] && (
            <Text fontSize="md" color="gray.400">
              <strong>Rating:</strong> {Ratings[0].Value}
            </Text>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" onClick={onClose} mr={3}>
            Close
          </Button>
          <Button
            colorScheme="yellow"
            onClick={handleAddToWatchlist}
            leftIcon={<FaPlus />}
            aria-label="Add to Watchlist"
            _hover={{
              transform: "scale(1.1)",
              transition: "0.3s",
            }}
          >
            Add to Watchlist
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MovieDetails;
