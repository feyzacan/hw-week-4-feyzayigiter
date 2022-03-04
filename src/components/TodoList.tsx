import Button from '@mui/material/Button';
import CategoryOptions from './CategoryOptions';
import StatusOptions from './StatusOptions';

function TodoList({ todos }: any) {
  return (
    <div>
      <ul>
        {todos.map((item: any) => <li style={{ display: 'flex' }}>{item.title}
          <CategoryOptions />
          <StatusOptions />
          <Button variant="contained">EDIT TODO</Button> <Button variant="contained">X</Button>
        </li>
        )}
      </ul>
    </div>
  )
}

export default TodoList