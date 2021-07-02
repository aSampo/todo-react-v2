import React from 'react';
import { ChakraProvider, Heading, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TaskInput from './components/TaskInput';

function App() {
  const [listOfTask, setTask] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setTask([...listOfTask, event.target.elements.taskInput.value]);
    event.target.elements.taskInput.value = '';
  }

  return (
    <ChakraProvider theme={theme}>
      <Grid>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Heading m="auto" size="lg">
          To-Do App 💙
        </Heading>
        <TaskInput handleSubmit={handleSubmit}/>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
