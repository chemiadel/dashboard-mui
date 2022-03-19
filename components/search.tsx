import {
  FormControl,
  TextField,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
  function handleSearch() {}

  return (
    <FormControl
      sx={{ marginLeft: 'auto', px: 6, maxWidth: '500px', flexGrow: 1 }}
      variant="outlined"
    >
      <TextField id="standard-basic" label="Search" variant="standard" />
    </FormControl>
  );
}
