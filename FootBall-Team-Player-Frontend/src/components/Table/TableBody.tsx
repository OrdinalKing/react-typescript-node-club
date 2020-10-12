import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, TableBody, TableCell, TableRow } from '@material-ui/core';

import { Column, Order } from './types';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme: Theme) => ({
  row: {
    height: theme.spacing(8),
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

interface IProps {
  columns: Column[];
  rows: Array<any>;
  order: Order;
  orderBy: string;
  page: number;
  rowsPerPage: number;
}

const TableBodyComponent: React.FC<IProps> = ({
  columns,
  rows,
  order,
  orderBy,
  page,
  rowsPerPage,
}: IProps): JSX.Element => {
  const classes = useStyles();

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: any) => (
          <TableRow className={classes.row} key={row.id} hover tabIndex={-1}>
            {columns.map((column: Column) => (
              <TableCell key={row.id + column.field} align="center">
                {column.type === 'image' && (
                  <Avatar
                    className={classes.avatar}
                    src={row[column.field]}
                    alt={row[column.field]}
                  />
                )}
                {column.type === 'birthday' && row[column.field].split('T')[0]}
                {!column.type && row[column.field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 64 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableBodyComponent;
