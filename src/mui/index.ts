import { createTheme } from '@mui/material';
import { tableStyleOverrides } from './components/table';
import { tableCellStyleOverrides } from './components/table-cell';
import { tableRowStyleOverrides } from './components/table-row';

export const theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: tableStyleOverrides,
    },
    MuiTableCell: {
      styleOverrides: tableCellStyleOverrides,
    },
    MuiTableRow: {
      styleOverrides: tableRowStyleOverrides,
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root:last-of-type': {
            '& .MuiTableCell-root:first-of-type': {
              borderBottomLeftRadius: '16px',
            },
            '& .MuiTableCell-root:last-of-type': {
              borderBottomRightRadius: '16px',
            },
          },
        },
      },
    },
  },
});
