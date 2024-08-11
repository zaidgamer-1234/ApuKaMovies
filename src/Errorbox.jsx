import { Box, Text } from "@chakra-ui/react";

function Errorbox() {
  return (
    <Box
      bg="red.600"
      color="white"
      borderWidth="1px"
      borderRadius="md"
      borderColor="red.700"
      p={4}
      mx="auto"
      mt="15rem"
      maxW="md"
      boxShadow="md"
      textAlign="center"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={3}>
        Error
      </Text>
      <Text fontSize="lg" fontWeight="semibold">
        No results found. Try adjusting your search criteria.
      </Text>
    </Box>
  );
}

export default Errorbox;
