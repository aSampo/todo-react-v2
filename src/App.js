import React from 'react';
import {
  ChakraProvider,
  Heading,
  Grid,
  Text,
  Checkbox,
  Divider,
  Stack,
  theme,
  Box,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TaskInput from './components/TaskInput';

function App() {
  const [listOfTask, setTasks] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTasks([
      ...listOfTask,
      generateTask(event.target.elements.taskInput.value),
    ]);
    event.target.elements.taskInput.value = '';
  }

  function onCheckChange(id, event) {
    let index = listOfTask.findIndex(e => e.id === id);
    let items = [...listOfTask];
    let item = { ...items[index] };
    item.checked = event.target.checked;
    items[index] = item;
    setTasks(items);
  }

  function generateTask(taskDescription) {
    return {
      id: Math.floor(Math.random() * Date.now()),
      description: taskDescription,
      checked: false,
    };
  }

  return (
    <ChakraProvider theme={theme}>
      <Grid>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Heading m="auto" size="lg">
          To-Do App 💙
        </Heading>
        <TaskInput handleSubmit={handleSubmit} />
        {listOfTask
          .filter(e => !e.checked)
          .map(item => (
            <Stack m="auto" direction="row" key={item.id}>
              <Text fontSize="15px">{item.description}</Text>
              <Checkbox
                onChange={e => onCheckChange(item.id, e)}
                isChecked={item.checked}
              />
            </Stack>
          ))}
        {listOfTask.filter(e => e.checked).length ? <Divider m="auto" /> : null}
        {listOfTask
          .filter(e => e.checked)
          .map(item => (
            <Stack m="auto" direction="row" key={item.id}>
              <Text fontSize="15px" as="s">{item.description}</Text>
              <Checkbox
                onChange={e => onCheckChange(item.id, e)}
                isChecked={item.checked}
              />
            </Stack>
          ))}
      </Grid>
    </ChakraProvider>
  );
}

export default App;
