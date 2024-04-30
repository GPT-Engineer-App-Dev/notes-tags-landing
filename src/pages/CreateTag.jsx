import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";

const CreateTag = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">Create New Tag</Text>
        <Input placeholder="Tag name" />
        <Button colorScheme="blue">Create Tag</Button>
      </Box>
    </VStack>
  );
};

export default CreateTag;