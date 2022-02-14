import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import { getTodosByVisibilityFilter } from '../redux/selector';

function TodoList() {
  const { todos, visibilityFilter } = useSelector(state => state)
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter)

  return (
    <Box my={3}>
      {filterTodos.length ? filterTodos.map(todo => (
        <Todo key={`todo-${todo.id}`} todo={todo}/>
      )) : <Box textAlign='center'> No todos yay </Box>}
    </Box>
  );
}

export default TodoList;