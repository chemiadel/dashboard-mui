import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchInput from '@/components/search';
import { Button } from '@mui/material';
import ServiceCard from '@/components/cards/service';
import Link from 'next/link';

type CustomNextPage = NextPage & {
  pageName: string;
};

const Services: CustomNextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SearchInput />
        <Link href={`/services/add`}>
          <Button size="large" variant="contained">
            Add
          </Button>
        </Link>
      </Box>
      <ServiceCard />
    </Container>
  );
};

Services.pageName = 'Services';
export default Services;
