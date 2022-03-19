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
  RadioGroup,
  FormLabel,
  Radio,
} from '@mui/material';
import ActionAreaCard from '@/components/cards/knowledge';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import useAPI from '@/lib/hooks/fetch';
import { categoryRead, ICategoryDetails } from '@/lib/api/knowledge';

type CustomNextPage = NextPage & {
  pageName: string;
};

const AddCategory: CustomNextPage = () => {
  const form = useForm<ICategoryDetails>();
  const categoryReadData = useAPI<any>(true ? categoryRead(47) : undefined);

  function handleUpload() {}

  function handleSubmit(data: ICategoryDetails) {
    console.log({ data });
  }

  console.log({ categoryReadData });
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
        <Stack direction="row" alignItems="start" spacing={1}>
          <TextField
            sx={{ flex: 1 }}
            error={typeof form.formState.errors?.name !== 'undefined'}
            required
            {...form.register('name', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
            id="outlined-error-helper-text"
            label="Name"
            helperText={form.formState.errors?.name?.message || ''}
          />
          <FormControl sx={{ flex: 1 }}>
            <InputLabel id="demo-simple-select-label">Select language</InputLabel>
            <Controller
              control={form.control}
              name={`category`}
              render={({ field: { onChange, value } }) => (
                <Select
                  label="Parent Category"
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
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <TextField
            sx={{ flex: 1 }}
            error={typeof form.formState.errors?.titleTag !== 'undefined'}
            required
            {...form.register('titleTag', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
            id="outlined-error-helper-text"
            label="Title Tag"
            helperText={form.formState.errors?.titleTag?.message || ''}
          />
          <TextField
            sx={{ flex: 1 }}
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
        </Stack>
        <Stack direction="column" spacing={1}>
          <TextField
            sx={{ flex: 1 }}
            error={typeof form.formState.errors?.keywords !== 'undefined'}
            {...form.register('keywords')}
            id="outlined-error-helper-text"
            label="Keywords"
            helperText={form.formState.errors?.keywords?.message || ''}
          />
          <TextField
            sx={{ flex: 1 }}
            error={typeof form.formState.errors?.metaDescription !== 'undefined'}
            multiline
            minRows={3}
            {...form.register('metaDescription')}
            label="Meta Description"
            helperText={form.formState.errors?.metaDescription?.message || ''}
          />
        </Stack>
        {/**Permissions */}
        <FormControl required>
          <FormLabel>PERMISSIONS</FormLabel>
          <RadioGroup row>
            <FormControlLabel checked value="public" control={<Radio />} label="Public" />
            <FormControlLabel value="internal" control={<Radio />} label="Internal" />
          </RadioGroup>
        </FormControl>
        {/**Permissions */}
        <FormControl required>
          <FormLabel>TIMING</FormLabel>
          <RadioGroup row>
            <FormControlLabel checked value="now" control={<Radio />} label="Now" />
            <FormControlLabel value="custom" control={<Radio />} label="Custom" />
          </RadioGroup>
        </FormControl>
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
        <Button onClick={form.handleSubmit(handleSubmit)} variant="contained">
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

AddCategory.pageName = 'Add Category';
export default AddCategory;
