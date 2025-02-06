import { TableCellClasses, TableCellProps, Theme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

export const tableCellDefaultProps: Partial<TableCellProps> = {};

export const tableCellStyleOverrides: Partial<
  OverridesStyleRules<
    keyof TableCellClasses,
    'MuiTableCell',
    Omit<Theme, 'components'>
  >
> = {
  root: {
    borderBottom: 'none',
  },
  head: {
    minWidth: 'none',
    padding: '24px',
    color: '#818181',

    ':first-child': {
      borderTopLeftRadius: '16px',
    },
    ':last-child': {
      borderTopRightRadius: '16px',
    },
  },
  body: {
    whiteSpace: 'normal',
    minHeight: 'none',
    maxWidth: '500px',
    lineClamp: '3',
    wordBreak: 'break-word',
    padding: '24px',
  },
};
