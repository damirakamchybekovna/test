import { useSelector, useDispatch } from "react-redux"
import { DeleteTodo } from "../redux/actions/actions"
import ListItem from "./ListItem"


const List = () => {
    const todos = useSelector(state => state.todo)
    // console.log(todos);
    const dispatch = useDispatch()

  
  return (
    <div>
      <ul>
        {todos.map((el) => (
            <ListItem key={el.id}  onClick={() => dispatch(DeleteTodo(el.id))}>{el.text}</ListItem>
        ))}
      </ul>
    </div>
  )
}

export default List

