import React from 'react';

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
  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row: any) => (
          <TableRow key={row.name} hover tabIndex={-1}>
            {columns.map((column: Column) => (
              <TableCell key={row.id} align="center">
                {column.type === 'image' && (
                  <Avatar src={row[column.field]} alt={row[column.field]} />
                )}
                {!column.type && row[column.field]}
              </TableCell>
            ))}
          </TableRow>
        ))}
    </TableBody>
  );
};

export default TableBodyComponent;
