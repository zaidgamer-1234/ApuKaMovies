import { Box, Image, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";

import { useMovies } from "./PostProvider";

function ShowMovies({ movie }) {
  const { Poster, Title, Type, Year, imdbID } = movie || {};
  const { setSelectedMovie, setSelectedMovieData, setMovieLoaded } =
    useMovies();

  const cardHoverBg = useColorModeValue("gray.700", "gray.600");
  const borderColor = useColorModeValue("gray.700", "gray.600");

  async function handleClick(imdbID) {
    setMovieLoaded(true);
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=dc2b1092`
      );
      setSelectedMovie(true);
      setSelectedMovieData(res.data);

      console.log(res.data);
    } catch (err) {
      console.log("error occured while fetching description data", err.message);
      setMovieLoaded(false);
    } finally {
      setMovieLoaded(false);
    }
  }

  return (
    <Box
      onClick={() => handleClick(imdbID)}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="#2f2f2f"
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
