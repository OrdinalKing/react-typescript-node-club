import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

import { Column, Order } from './types';

const useStyles = makeStyles(() => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

interface IProps {
  columns: Column[];
  orderBy: string;
  order: Order;
  handleRequestSort: (e: React.MouseEvent<unknown>, field: string) => void;
}

const TableHeaderComponent: React.FC<IProps> = ({
  columns,
  orderBy,
  order,
  handleRequestSort,
}: IProps): JSX.Element => {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        {columns.map((column: Column) => (
          <TableCell
            key={column.field}
            align="center"
            padding="default"
            sortDirection={orderBy === column.field ? order : false}
            width={column.width}
          >
            <Typography variant="subtitle1">
              {column.sortable ? (
                <TableSortLabel
                  active={orderBy === column.field}
                  direction={orderBy === column.field ? order : 'asc'}
                  onClick={(e: React.MouseEvent<unknown>) =>
                    handleRequestSort(e, column.field)
                  }
                  IconComponent={ArrowDropDown}
                >
                  {column.header}
                  {orderBy === column.field ? (
                    <span className={classes.visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted decending'
                        : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              ) : (
                column.header
              )}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderComponent;
