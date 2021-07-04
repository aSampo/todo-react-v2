import React from 'react';
import { ChakraProvider, Heading, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';

function App() {
  const [listOfTask, setTasks] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTasks(
      [...listOfTask, generateTask(event.target.elements.taskInput.value)].sort(
        (y, x) => (x.checked === y.checked ? 0 : x.checked ? -1 : 1)
      )
    );
    event.target.elements.taskInput.value = '';
  }

  function onCheckChange(id, event) {
    let index = listOfTask.findIndex(e => e.id === id);
    let items = [...listOfTask];
    let item = { ...items[index] };
    item.checked = event.target.checked;
    items[index] = item;
    items.sort((y, x) => (x.checked === y.checked ? 0 : x.checked ? -1 : 1));
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
      <Grid m="auto" width="50%">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Heading m="auto" size="lg">
          To-Do App 💙
        </Heading>
        <TaskInput handleSubmit={handleSubmit} />
        {listOfTask.map(item => (
          <TaskCard key={item.id} task={item} onCheckChange={onCheckChange} />
        ))}
      </Grid>
    </ChakraProvider>
  );
}

export default App;
