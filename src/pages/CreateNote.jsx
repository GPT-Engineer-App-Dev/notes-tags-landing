import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";

const CreateNote = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">Create New Note</Text>
        <Input placeholder="Note title" />
        <Input placeholder="Note content" />
        <Button colorScheme="blue">Save Note</Button>
      </Box>
    </VStack>
  );
};

export default CreateNote;