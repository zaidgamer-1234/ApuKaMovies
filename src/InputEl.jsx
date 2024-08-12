import { MdSearch, MdMovie } from "react-icons/md";
import { useMovies } from "./helper/customHook";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import WatchListbutton from "./WatchListbutton";

function InputEl() {
  const { movie, setMovie } = useMovies();
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

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
      flexDirection={["column", "column", "row"]}
    >
      <Flex
        justify={["center", "center", "left"]}
        align="center"
        mb={[4, 4, 0]}
        width={["100%", "100%", "auto"]}
        small
        screens
      >
        <Icon as={MdMovie} boxSize={[6, 7, 8]} color="blue.400" mr={2} />
        <Text
          fontSize={["md", "xl", "2xl"]}
          color="#ddd"
          fontWeight="bold"
          screens
        >
          Apun Ka Movies
        </Text>
      </Flex>
      <Spacer display={["none", "none", "block"]} />

      <InputGroup
        maxW={["50%", "100%", "500px"]}
        width={["100%", "100%", "auto"]}
        mb={[4, 4, 0]}
        ml={[3]}
        display={["flex"]}
        justify={["center"]}
      >
        <InputLeftElement pointerEvents="none">
          <MdSearch color="#fff" />
        </InputLeftElement>
        <Input
          ref={inputEl}
          placeholder="Search"
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
      <WatchListbutton
        display={["inline-flex", "inline-flex", "inline-flex"]}
      />
    </Flex>
  );
}

export default InputEl;
