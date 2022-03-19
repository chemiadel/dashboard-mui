import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SearchInput from '@/components/search';
import { Button } from '@mui/material';
import Link from 'next/link';

import IconButton from '@mui/material/IconButton';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

type CustomNextPage = NextPage & {
  pageName: string;
};

const Forums: CustomNextPage = () => {
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
        <Link href={`/forums/add`}>
          <Button size="large" variant="contained">
            Add
          </Button>
        </Link>
      </Box>
      <DataTable />
    </Container>
  );
};

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', minWidth: 250 },
  { field: 'footer', headerName: 'Footer', flex: 1, width: 250 },
  { field: 'createdAt', headerName: 'Created', width: 250 },
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
  { id: 1, title: 'Snow', footer: 'Jon', createdAt: 55 },
  { id: 2, lastName: 'Lannister', footer: 'Cersei', createdAt: 42 },
  { id: 3, lastName: 'Lannister', footer: 'Jaime', createdAt: 45 },
  { id: 4, lastName: 'Stark', footer: 'Arya', createdAt: 16 },
  { id: 5, lastName: 'Targaryen', footer: 'Daenerys', createdAt: null },
  { id: 6, lastName: 'Melisandre', footer: null, createdAt: 150 },
  { id: 7, lastName: 'Clifford', footer: 'Ferrara', createdAt: 44 },
  { id: 8, lastName: 'Frances', footer: 'Rossini', createdAt: 36 },
  { id: 9, lastName: 'Roxie', footer: 'Harvey', createdAt: 65 },
];

function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        hideFooterSelectedRowCount
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

Forums.pageName = 'Forums';
export default Forums;
