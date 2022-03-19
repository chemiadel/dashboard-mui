import type { NextPage } from 'next';
import {
  Typography,
  Container,
  CardActionArea,
  CardMedia,
  Button,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Box,
  IconButton,
} from '@mui/material';
import ActionAreaCard from '@/components/cards/knowledge';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { Label } from '@mui/icons-material';

type CustomNextPage = NextPage & {
  pageName: string;
};

interface IService {
  title: string;
  type: string;
  description: string;
  defaultValue?: string;
  placeHolder?: string;
  values?: IValues[];
}

interface IValues {
  value: string;
}

const AddService: CustomNextPage = () => {
  const form = useForm<IService>();
  const arrayField = useFieldArray({
    control: form.control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'values', // unique name for your Field Array
  });

  function handleSubmit(data: IService) {
    console.log({ data });
  }

  return (
    <Container maxWidth="lg">
      <Stack
        // border={1}
        // borderRadius={2}
        // borderColor="#d0d7de"
        // p={2}
        maxWidth="sm"
        my={4}
        direction="column"
        alignItems="left"
        spacing={4}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <TextField
            sx={{ flex: 1 }}
            error={typeof form.formState.errors?.title !== 'undefined'}
            required
            {...form.register('title', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
            id="outlined-error-helper-text"
            label="Name"
            helperText={form.formState.errors?.title?.message || ''}
          />
          <Box sx={{ flex: 1 }}>
            <Controller
              control={form.control}
              name="type"
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Type"
                    onChange={(e) => onChange(e.target.value)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </Stack>
        <TextField
          error={typeof form.formState.errors?.description !== 'undefined'}
          required
          multiline
          {...form.register('description', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          id="outlined-error-helper-text"
          label="Description"
          helperText={form.formState.errors?.description?.message || ''}
        />
        <Stack direction="row" alignItems="center" spacing={1}>
          <TextField
            sx={{ flex: 1 }}
            error={typeof form.formState.errors?.title !== 'undefined'}
            required
            {...form.register('title', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
            id="outlined-error-helper-text"
            label="Placeholder"
            helperText={form.formState.errors?.title?.message || ''}
          />
          <TextField
            sx={{ flex: 1 }}
            error={typeof form.formState.errors?.title !== 'undefined'}
            required
            {...form.register('title', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
            id="outlined-error-helper-text"
            label="Default Value"
            helperText={form.formState.errors?.title?.message || ''}
          />
        </Stack>
        {/**Languages */}
        <Stack direction="column" alignItems="center" spacing={2}>
          <Stack width="100%" direction="row" alignItems="center" spacing={4}>
            <Typography sx={{ width: '60%' }}>Add Value</Typography>
          </Stack>
          {/**Array of inputs */}
          {arrayField.fields.map((item, index) => (
            <Stack key={item.id} width="100%" direction="row" spacing={4} alignItems="center">
              <FormControl sx={{ width: '80%' }}>
                <TextField
                  {...form.register(`values.${index}.value`, {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                  id="outlined-error-helper-text"
                  label="Placeholder"
                />
              </FormControl>
              <IconButton onClick={() => arrayField.remove(index)} sx={{ mx: 'auto' }}>
                <ClearIcon />
              </IconButton>
            </Stack>
          ))}
          <IconButton onClick={() => arrayField.append({})} sx={{ mx: 'auto' }}>
            <AddIcon />
          </IconButton>
        </Stack>
        <Button onClick={form.handleSubmit(handleSubmit)} variant="contained">
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

AddService.pageName = 'Add Service';
export default AddService;
