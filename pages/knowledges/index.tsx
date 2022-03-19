import { useEffect } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchInput from '@/components/search';
import { Button } from '@mui/material';
import ActionAreaCard from '@/components/cards/knowledge';
import Link from 'next/link';
import { knowledgeBaseList, knowledgeBaseCategoriesList } from '@/lib/api/knowledge';
import useAPI from '@/lib/hooks/fetch';

type CustomNextPage = NextPage & {
  pageName: string;
};

const Knowledge: CustomNextPage = () => {
  const { data, loading, error } = useAPI(knowledgeBaseList());

  console.log({ data });
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
        <Link href={`/knowledges/add`}>
          <Button size="large" variant="contained">
            Add
          </Button>
        </Link>
      </Box>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <ActionAreaCard data={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

Knowledge.pageName = 'Knowledge Base';
export default Knowledge;
