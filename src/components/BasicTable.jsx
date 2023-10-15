import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { useContext } from 'react';
import OutlinedCard from './Card';
import DataContext from '../contexts/data';

export default function BasicTable() {
  const { data, columnTitle } = useContext(DataContext);
  console.log('inside basic :::', data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 1, padding: 0, height: '100vh', border: 2 }} aria-label="simple table">
        {columnTitle?.map((col) => (
          <TableCell
            key={col}
            sx={{
              background: '#F4F5F7',
              padding: 0.5,
              width: 1 / columnTitle.length,
              minWidth: 120,
            }}
          >
            <TableHead TableHead sx={{ width: 120, textAlign: 'center' }}>
              {col}
            </TableHead>
          </TableCell>
        ))}
        <TableRow>
          {data?.map((storyProps) => (
            <OutlinedCard key={storyProps.id} {...storyProps} />
          ))}
        </TableRow>
      </Table>
    </TableContainer>
  );
}
