import { TableClasses, TableProps, Theme } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';

export const tableDefaultProps: Partial<TableProps> = {};

export const tableStyleOverrides: Partial<
  OverridesStyleRules<keyof TableClasses, 'MuiTable', Omit<Theme, 'components'>>
> = {
  root: {
    borderCollapse: 'separate',
    borderSpacing: '0px 1px',
    borderRadius: '16px',
  },
};
