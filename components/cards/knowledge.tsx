import * as React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { IconButton, CardActionArea } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IKnowledge } from '@/lib/api/knowledge';

const dummyData = {
  image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
  title: 'title',
  footer: 'footer',
};

export default function ActionAreaCard({ data }: { data: IKnowledge }) {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      <Link href={`/knowledges/${data.id}`}>
        <CardMedia
          sx={{ cursor: 'pointer' }}
          component="img"
          height="140"
          image={data.icon || dummyData.image}
          alt="green iguana"
        />
      </Link>
      <Stack
        direction="column"
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
          {data?.name || dummyData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.footer || dummyData.footer}
        </Typography>
      </CardContent>
    </Card>
  );
}
