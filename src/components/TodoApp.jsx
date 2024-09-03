import { Box } from '@chakra-ui/react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import EditForm from './EditForm'

const TodoApp = () => {
    return (
        <Box w={'500px'} p={'1rem'}>
            <TodoForm />
            <EditForm />
            <TodoList />
        </Box>
    )
}

export default TodoApp
