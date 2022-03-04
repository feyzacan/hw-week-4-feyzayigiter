
import Button from '@mui/material/Button';

function CategoryList({ categories }: any) {
  return (
    <div>
      <ul>
        {categories.map((item: any) => <li>{item.title}
          <Button style={{ maxWidth: '200px' }} variant="contained">EDIT STATUS</Button> <Button style={{ maxWidth: '50px' }} variant="contained">X</Button>
        </li>
        )}
      </ul>
    </div>
  )
}

export default CategoryList