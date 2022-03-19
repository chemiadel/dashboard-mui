import * as React from 'react';
import type { NextPage } from 'next';
import SearchInput from '@/components/search';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, IconButton, Stack, Container, Chip, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {
  IKnowledge,
  knowledgeBaseRead,
  knowledgeBaseCategoriesList,
  categoryRead,
  ICategory,
} from '@/lib/api/knowledge';
import useAPI from '@/lib/hooks/fetch';

type CustomNextPage = NextPage & {
  pageName: string;
};

const Knowledge: CustomNextPage = () => {
  const { query } = useRouter();
  const knowledgeData = useAPI<IKnowledge>(
    query?.id ? knowledgeBaseRead(query.id as string) : undefined,
  );
  const knowledgeCategoriesData = useAPI<ICategory[]>(
    query?.id ? knowledgeBaseCategoriesList(query.id as string) : undefined,
  );

  console.log({ knowledgeData });
  console.log({ knowledgeCategoriesData });
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
        <Link href={`/knowledges/1/add`}>
          <Button size="large" variant="contained">
            Add
          </Button>
        </Link>
      </Box>
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          {knowledgeData?.data?.locales.map((item) => (
            <Chip label={item.name} />
          ))}
        </Stack>
        <DataTable data={knowledgeCategoriesData?.data} />
      </Stack>
    </Container>
  );
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', minWidth: 250, flex: 1 },
  { field: 'createdAt', headerName: 'Created At', width: 250 },
  {
    field: 'edit',
    headerName: '',
    type: 'number',
    width: 90,
    renderCell: () => {
      return (
        <IconButton>
          <EditIcon />
        </IconButton>
      );
    },
  },
  {
    field: 'delete',
    headerName: '',
    type: 'number',
    width: 90,
    renderCell: () => {
      return (
        <IconButton>
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];

const rows = [
  { id: 1, name: 'Snow', title: 'Jon', parentCategory: 55 },
  { id: 2, name: 'Lannister', title: 'Cersei', parentCategory: 42 },
];

function DataTable({ data }: { data?: ICategory[] }) {
  if (!data) return null;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        hideFooterSelectedRowCount
        rows={data.map((item) => ({
          id: item.id,
          createdAt: new Date(item.created_at).toLocaleString(),
        }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

Knowledge.pageName = 'Categories';
export default Knowledge;
