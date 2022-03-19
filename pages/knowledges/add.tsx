import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchInput from '@/components/search';
import {
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
  Checkbox,
  IconButton,
} from '@mui/material';
import ActionAreaCard from '@/components/cards/knowledge';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { useFieldArray, useForm, Controller } from 'react-hook-form';

type CustomNextPage = NextPage & {
  pageName: string;
};

export interface IKnowledge {
  title: string;
  footer: string;
  active: boolean;
  icon?: string;
  languages: ILanguage[];
}

interface ILanguage {
  name: string;
  default: boolean;
}

const AddKnowledge: CustomNextPage = () => {
  const form = useForm<IKnowledge>();
  const arrayField = useFieldArray({
    control: form.control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'languages', // unique name for your Field Array
  });

  // React.useEffect(() => {
  //   console.log('lang changed');
  // }, [form.getValues('languages')]);

  function handleUpload() {}

  function handleSubmit(data: IKnowledge) {
    console.log({ data });
  }

  function handleDefaultChange(index: number) {
    arrayField.fields.map((item, i) => {
      if (index !== i) {
        arrayField.update(i, {
          ...item,
          default: false,
        });
        // form.setValue(`languages.${i}.default`, false);
      }
    });
  }

  return (
    <Container maxWidth="lg">
      <Stack maxWidth="sm" my={4} direction="column" alignItems="left" spacing={4}>
        <FormControlLabel
          sx={{ marginLeft: 'auto' }}
          control={
            <Controller
              control={form.control}
              name="active"
              render={({ field: { onChange, value } }) => (
                <Switch
                  value={value}
                  onChange={(e) => onChange(e.target.checked)}
                  required={true}
                />
              )}
            />
          }
          label="Active"
          aria-required
        />
        <TextField
          error={typeof form.formState.errors?.title !== 'undefined'}
          required
          {...form.register('title', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          id="outlined-error-helper-text"
          label="Title"
          helperText={form.formState.errors?.title?.message || ''}
        />
        <TextField
          error={typeof form.formState.errors?.footer !== 'undefined'}
          required
          multiline
          {...form.register('footer', {
            required: {
              value: true,
              message: 'This field is required',
            },
          })}
          id="outlined-error-helper-text"
          label="Footer"
          helperText={form.formState.errors?.footer?.message || ''}
        />

        {/**Handle upload */}
        <Stack direction="column">
          <Typography>Knowledge Base Icon</Typography>
          <Box sx={{ position: 'relative', width: 240 }}>
            <CardMedia component="img" height="140" image="/placeholder.png" alt="Upload" />
            {false ? (
              <Button
                color="primary"
                variant="contained"
                onClick={() => handleUpload()}
                sx={{ position: 'absolute', top: 5, right: 5 }}
              >
                Change
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={() => handleUpload()}
                sx={{ position: 'absolute', top: 5, right: 5 }}
              >
                Upload
              </Button>
            )}
          </Box>
        </Stack>
        {/**Languages */}
        <Stack direction="column" alignItems="center" spacing={2}>
          <Stack width="100%" direction="row" alignItems="center" spacing={4}>
            <Typography sx={{ width: '60%' }}>Language</Typography>
            <Typography textAlign="left" sx={{ width: '20%' }}>
              Default
            </Typography>
          </Stack>
          {/**Array of inputs */}
          {arrayField.fields.map((item, index) => (
            <Stack key={item.id} width="100%" direction="row" spacing={4} alignItems="center">
              <FormControl sx={{ width: '60%' }}>
                <InputLabel id="demo-simple-select-label">Select language</InputLabel>
                <Controller
                  control={form.control}
                  name={`languages.${index}.name`}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      label="Select language"
                      id={item.id}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <Controller
                control={form.control}
                name={`languages.${index}.default`}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    // {...form.register(`languages.${index}.default`)}
                    value={value}
                    onChange={(e) => {
                      // console.log('val', typeof e.target.value);
                      onChange(e.target.checked);
                      handleDefaultChange(index);
                    }}
                    sx={{ mx: 'auto' }}
                    defaultChecked={false}
                  />
                )}
              />
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

AddKnowledge.pageName = 'Add Knowledge Base';
export default AddKnowledge;
