import React from 'react';
import {
  ChakraProvider,
  Heading,
  Grid,
  theme,
  Input,
  FormControl,
  Box
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

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
        {/* Mover a un componente el Box */}
        <Box m="auto" width="50%">
          <form onSubmit={handleSubmit}>
            <FormControl id="task" isRequired>
              <Input
                id="taskInput"
                size="md"
                variant="flushed"
                placeholder="Add task, press Enter to save."
              />
            </FormControl>
          </form>
        </Box>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
