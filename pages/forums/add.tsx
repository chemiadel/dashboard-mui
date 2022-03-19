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
import { Label } from '@mui/icons-material';

type CustomNextPage = NextPage & {
  pageName: string;
};

export interface IForum {
  name: string;
  description: string;
  topicVote?: boolean;
  postVote?: boolean;
  active?: boolean;
}

const Add: CustomNextPage = () => {
  const form = useForm<IForum>();

  function handleSubmit(data: IForum) {
    console.log({ data });
  }

  return (
    <Container maxWidth="lg">
      <Stack maxWidth="sm" my={4} direction="column" alignItems="left" spacing={4}>
        <TextField
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
        <Controller
          control={form.control}
          name="postVote"
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  value={value}
                  onChange={(e) => onChange(e.target.checked)}
                  sx={{ mx: 'left' }}
                  defaultChecked={false}
                />
              }
              label="Post Vote"
            />
          )}
        />
        <Controller
          control={form.control}
          name="topicVote"
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  value={value}
                  onChange={(e) => onChange(e.target.checked)}
                  sx={{ mx: 'left' }}
                  defaultChecked={false}
                />
              }
              label="Topic Vote"
            />
          )}
        />
        <FormControlLabel
          sx={{ marginLeft: 0 }}
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
        <Button onClick={form.handleSubmit(handleSubmit)} variant="contained">
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

Add.pageName = 'Add New Forum';
export default Add;
