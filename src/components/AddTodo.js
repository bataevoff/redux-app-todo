import React, { useState } from 'react';
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function AddTodo() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addTodo(value))
    setValue('')
  }

  const handleInput = e => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            type='text'
            value={value}
            onChange={handleInput}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <Button
          colorScheme='teal'
          type='submit'
          disabled={!value}
          borderLeftRadius={0}
          borderBottomLeft={0}
        >Add Todo</Button>
      </Flex>
    </form>
  );
}

export default AddTodo;