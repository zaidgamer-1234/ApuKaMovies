import { Flex, Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <Flex justify="center" align="center" h="100vh" w="100vw">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.900"
        size="xl"
      />
    </Flex>
  );
}

export default Loader;
