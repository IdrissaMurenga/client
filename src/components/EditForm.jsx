import { Input, Box, Text, Flex, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useContext } from "react"
import {TodosContext} from '../context/TodoContext.js'

const EditForm = () => {
    const { editTask, handleEdit, setEditTask } = useContext(TodosContext);
    return (
        <Box mb='1rem'>
            <form onSubmit={handleEdit}>
                <Flex gap={'1rem'}>
                    <Input
                        value={editTask.title}
                        onChange={(e)=>setEditTask({...editTask, title:e.target.value})}
                        border={'1px solid gray'}
                        type="text"
                        placeholder="edit task..."
                    />
                    <Button px={'1.5rem'} type="submit">
                        <Text pr={'1rem'}>Edit</Text>
                        <EditIcon />
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}

export default EditForm
