import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Spacer,
  Icon,
  Button,
} from "@chakra-ui/react";
import { MdSearch, MdMovie, MdPlaylistPlay } from "react-icons/md";
import { useMovies } from "./PostProvider";

function InputEl() {
  const { movie, setMovie } = useMovies();

  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      p={4}
      bg="gray.800"
      borderBottom="2px solid blue.500"
      width="100%"
      position="fixed"
      top={0}
      zIndex={1}
    >
      <Flex align="center">
        <Icon as={MdMovie} boxSize={8} color="blue.400" mr={2} />
        <Text fontSize="2xl" color="#ddd" fontWeight="bold">
          Apun Ka Movies
        </Text>
      </Flex>
      <Spacer />
      <InputGroup maxW="500px" width="100%">
        <InputLeftElement pointerEvents="none">
          <MdSearch color="#fff" />
        </InputLeftElement>
        <Input
          placeholder="Search for a movie..."
          size="md"
          borderRadius="full"
          bgColor="gray.700"
          color="white"
          _placeholder={{ color: "#ddd" }}
          _hover={{ borderColor: "blue.400" }}
          _focus={{ borderColor: "blue.500", boxShadow: "0 0 5px blue" }}
          fontFamily="'Montserrat', sans-serif"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
      </InputGroup>
      <Button
        ml={4}
        // onClick={handleViewWatchlist}
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
    </Flex>
  );
}

export default InputEl;
