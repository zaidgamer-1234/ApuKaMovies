import { Box, Text } from "@chakra-ui/react";

function Errorbox() {
  return (
    <Box
      bg="#909090"
      color="red.600"
      borderWidth="1px"
      borderRadius="full"
      borderColor="red.800"
      p={3}
      mx="auto"
      mt="15rem"
      maxW="md"
      boxShadow="lg"
      textAlign="center"
    >
      <Text
        fontStyle="sans-serif"
        fontSize="3xl"
        fontWeight="bold"
        mb={4}
        textShadow="1px 1px 3px rgba(0, 0, 0, 0.6)"
      >
        No results found.
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        Try adjusting your search criteria.
      </Text>
    </Box>
  );
}

export default Errorbox;
