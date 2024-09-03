import { Input, Box, Text, Flex, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { TodosContext } from "../context/TodoContext";


const TodoForm = () => {
    const {title , setTitle, handleSubmit} = useContext(TodosContext);
    return (
        <Box mb='1rem'>
            <Text fontSize={'2rem'} fontWeight={'bold'}>Todo App</Text>
            <form onSubmit={handleSubmit}>
                <Flex gap={'1rem'}>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        border={'1px solid gray'}
                        type="text"
                        placeholder="Add a new task..."
                    />
                    <Button px={'1.5rem'} type="submit">
                        <Text pr={'1rem'}>Add</Text>
                        <AddIcon />
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}

export default TodoForm
