import Container from "react-bootstrap/esm/Container"
import { TodoItem } from "./TodoItem"

export function TodoList({itemList, deleteItem}){
    
    return <Container>
        <h4 className="text-white m-4">Todo List</h4>
        {
            itemList.map(item => <TodoItem item={item} deleteItem={deleteItem} />)
        }
    </Container>
}