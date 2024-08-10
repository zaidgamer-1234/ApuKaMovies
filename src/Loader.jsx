import { Flex } from "@chakra-ui/react";

function Loader() {
  return (
    <Flex justify="center" align="center" h="100vh" w="100vw">
      <div className="loader"></div>
    </Flex>
  );
}

export default Loader;
