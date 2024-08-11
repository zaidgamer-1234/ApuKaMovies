import { Box, Image, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { useMovies } from "./helper/customHook";
import axios from "axios";
import PropTypes from "prop-types";

function ShowMovies({ movie }) {
  const { Poster, Title, Type, Year, imdbID } = movie || {};
  const { setSelectedMovie, setSelectedMovieData } = useMovies();

  const cardHoverBg = useColorModeValue("gray.700", "gray.600");
  const borderColor = useColorModeValue("gray.700", "gray.600");

  async function handleClick(imdbID) {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=dc2b1092`
      );

      setSelectedMovie(true);
      setSelectedMovieData(res.data);
    } catch (err) {
      console.log("error occured while fetching description data", err.message);
    }
  }

  ShowMovies.propTypes = {
    movie: PropTypes.node.isRequired,
  };

  return (
    <Box
      onClick={() => handleClick(imdbID)}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="#404040"
      color="white"
      p={4}
      maxW="300px"
      m={4}
      boxShadow="lg"
      _hover={{
        bg: cardHoverBg,
        transform: "scale(1.03)",
        transition: "0.3s",
      }}
    >
      <Image
        src={
          Poster !== "N/A"
            ? Poster
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={Title}
        boxSize="200px"
        objectFit="cover"
        mx="auto"
        mb={4}
        borderRadius="md"
        borderWidth="2px"
        borderColor={borderColor}
      />
      <Stack spacing={3}>
        <Text fontSize="xl" fontWeight="bold">
          {Title}
        </Text>

        <Text>
          <strong>Type:</strong> {Type}
        </Text>
        <Text>
          <strong>Year:</strong> {Year}
        </Text>
      </Stack>
    </Box>
  );
}

export default ShowMovies;
