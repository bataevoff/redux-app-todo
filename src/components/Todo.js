import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions'

function Todo({ todo }) {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const handleChecker = () => dispatch(toggleTodo(todo.id))

  useEffect(() => {
    setChecked(todo.completed)
  }, [todo])

  return (
    <Box mb={1} bgColor="lightcoral" p={2}>
      <Checkbox onChange={handleChecker} colorScheme="teal" isChecked={checked}>
        <Text as={todo.done && "del"}>
          {todo.content}
        </Text>
      </Checkbox>
    </Box>
  );
}

export default Todo;