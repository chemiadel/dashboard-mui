import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { IconButton, CardActionArea } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const dummyData = {
  title: 'title',
  description: 'description',
};
export default function ActionAreaCard({ data }: any) {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          m: 1,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: 'white',
            ':hover': {
              backgroundColor: 'whitesmoke',
            },
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: 'white',
            ':hover': {
              backgroundColor: 'whitesmoke',
            },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title || dummyData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.description || dummyData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
