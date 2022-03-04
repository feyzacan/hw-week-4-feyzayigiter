import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function CategoryOptions({ categories }: any) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: '20ch' }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Category"
        // onChange= {handleSelectedCategory}
        >
          {categories?.map((item: any) => (<MenuItem value={item.categoryId}>{item.title}</MenuItem>))}
        </Select>
      </FormControl>
    </div>
  )
}

export default CategoryOptions
