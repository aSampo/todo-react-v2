import React from 'react';
import { ChakraProvider, Heading, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TaskInput from './components/TaskInput';
import TaskCard from './components/TaskCard';

function App() {
  const [listOfTask, setTasks] = React.useState(
    window.localStorage.getItem('tasks')
      ? JSON.parse(window.localStorage.getItem('tasks'))
      : []
  );

  function handleSubmit(event) {
    event.preventDefault();
    updateLocalStorage([
      ...listOfTask,
      generateTask(event.target.elements.taskInput.value),
    ]);
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
    updateLocalStorage(items);
    setTasks(items);
  }

  function generateTask(taskDescription) {
    return {
      id: Math.floor(Math.random() * Date.now()),
      description: taskDescription,
      checked: false,
    };
  }

  function updateLocalStorage(tasks) {
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(
        tasks.sort((y, x) => (x.checked === y.checked ? 0 : x.checked ? -1 : 1))
      )
    );
  }

  function onDeleteTask(e, id) {
    let items = listOfTask.filter(item => item.id !== id);
    updateLocalStorage(items);
    setTasks(items);
  }

  return (
    <ChakraProvider theme={theme}>
      <Grid m="auto" maxWidth="600px" width="70%">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Heading m="auto" size="lg">
          To-Do App 💙
        </Heading>
        <TaskInput handleSubmit={handleSubmit} />
        {listOfTask.map(item => (
          <TaskCard
            key={item.id}
            task={item}
            onCheckChange={onCheckChange}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </Grid>
    </ChakraProvider>
  );
}

export default App;
