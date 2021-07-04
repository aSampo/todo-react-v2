import { Stack, Text, Checkbox } from '@chakra-ui/react';

function TaskCard({ task, onCheckChange }) {
  return (
    <Stack m="auto" width="50%" direction="row" key={task.id}>
      <Checkbox
        onChange={e => onCheckChange(task.id, e)}
        isChecked={task.checked}
      />
      <Text fontSize="15px">{task.description}</Text>
    </Stack>
  );
}

export default TaskCard;
