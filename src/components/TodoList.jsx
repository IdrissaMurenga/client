import { Box, Card, Flex, Text, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { TodosContext } from "../context/TodoContext"

const TodoList = () => {
    const { tasks, toggleComplete, deleteTask, editClick } = useContext(TodosContext);

    return (
        <Card bgColor={'gray.200'} p="1rem" borderRadius={'8px'}>
            <Text fontSize={'1.2rem'} fontStyle={'italic'} fontWeight={'bold'} pb='1rem' borderBottom={'1px solid green'}>My Tasks</Text>
            <Box pt={'1rem'}>
                {tasks.map((task) => {
                    return (
                        <Flex key={task._id} mb="1rem" justifyContent={'space-between'} alignItems={'center'}>
                            <Flex alignItems={'center'} gap={'0.5rem'}>
                                <input type="checkbox" checked={task.complete} onChange={() => toggleComplete(task._id)} />
                                {task.complete ? <Text line-through color={'gray'} fontStyle={'italic'}>{task.title}</Text> : <Text>{task.title}</Text>}
                            </Flex>
                            <Flex gap={'0.5rem'}>
                                <Button onClick={() => deleteTask(task._id)}>Delete</Button>
                                <Button onClick={() => editClick(task)}>edit</Button>
                            </Flex>
                        </Flex>
                    )
                })}
            </Box>
        </Card>
    )
}

export default TodoList
