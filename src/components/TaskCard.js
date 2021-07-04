import { Stack, Text, Checkbox } from '@chakra-ui/react';

function TaskCard({ task, onCheckChange }) {
  return (
    <Stack direction="row" >
      <Checkbox
        onChange={e => onCheckChange(task.id, e)}
        isChecked={task.checked}
      />
      <Text fontSize="15px">{task.description}</Text>
    </Stack>
  );
}

export default TaskCard;
