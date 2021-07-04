import { Input, FormControl, Box } from '@chakra-ui/react';

function TaskInput({ handleSubmit }) {
  return (
    <Box >
      <form onSubmit={handleSubmit}>
        <FormControl id="task" isRequired>
          <Input
            autoComplete="off"
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
