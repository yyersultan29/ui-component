import { TableRowClasses, TableRowProps, Theme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

export const tableRowDefaultProps: Partial<TableRowProps> = {};

export const tableRowStyleOverrides: Partial<
  OverridesStyleRules<
    keyof TableRowClasses,
    'MuiTableRow',
    Omit<Theme, 'components'>
  >
> = {
  root: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
  },

  head: {
    background: '#FFFF',
    borderRadius: '16px',
  },
};
