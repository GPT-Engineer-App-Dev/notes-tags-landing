import { Box, Text, Select, VStack } from "@chakra-ui/react";

const ViewNotes = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">View Notes</Text>
        <Select placeholder="Filter by tag">
          <option value="tag1">Tag 1</option>
          <option value="tag2">Tag 2</option>
        </Select>
      </Box>
      <Box>
        <Text>No notes to display</Text>
      </Box>
    </VStack>
  );
};

export default ViewNotes;