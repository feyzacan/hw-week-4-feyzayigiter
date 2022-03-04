
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function StatusOptions({ status }: any) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: '20ch' }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Status"
        // onChange= {handleSelectedCategory}
        >
          {status?.map((item: any) => (<MenuItem value={item.statusId}>{item.title}</MenuItem>))}
        </Select>
      </FormControl>
    </div>
  )
}

export default StatusOptions
