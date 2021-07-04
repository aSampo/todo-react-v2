import { Input, FormControl, Box } from '@chakra-ui/react';

function TaskInput({ handleSubmit }) {
  return (
    <Box m="auto" width="50%">
      <form onSubmit={handleSubmit}>
        <FormControl id="task" isRequired>
          <Input
            autocomplete="off"
            id="taskInput"
            size="md"
            variant="flushed"
            placeholder="Add task, press Enter to save."
          />
        </FormControl>
      </form>
    </Box>
  );
}

export default TaskInput;
