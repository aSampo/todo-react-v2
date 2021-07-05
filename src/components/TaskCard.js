import {
  Stack,
  Text,
  Checkbox,
  Button,
  Icon,
  Box,
  Spacer,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
function TaskCard({ task, onCheckChange, onDeleteTask }) {
  return (
    <Stack direction="row">
      <Checkbox
        colorScheme="teal"
        onChange={e => onCheckChange(task.id, e)}
        isChecked={task.checked}
      />
      {task.checked ? <Text as="del" fontSize="15px">{task.description}</Text> : <Text fontSize="15px">{task.description}</Text> }
      <Spacer />
      <Box>
        <Button
          onClick={e => onDeleteTask(e, task.id)}
          colorScheme="red"
          variant="link"
        >
          <Icon as={AiFillDelete} />
        </Button>
      </Box>
    </Stack>
  );
}

export default TaskCard;
