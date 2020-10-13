import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableContainer,
  TablePagination,
} from '@material-ui/core';

import TableBody from './TableBody';
import TableHead from './TableHead';
import TableTitle from './TableTitle';
import { Column, Order } from './types';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    opacity: 0.6,
  },
  container: {},
}));

interface IProps {
  columns: Column[];
  defaultOrderBy: string;
  rows: Array<any>;
  title: string;
  handleOpenSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TableComponent: React.FC<IProps> = ({
  columns,
  defaultOrderBy,
  rows,
  title,
  handleOpenSearch,
}: IProps): JSX.Element => {
  const classes = useStyles();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage] = useState<number>(10);
  const [orderBy, setOrderBy] = useState<string>(defaultOrderBy);
  const [order, setOrder] = useState<Order>('asc');

  useEffect(() => {
    setPage(0);
  }, [rows]);

  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRequestSort = (
    e: React.MouseEvent<unknown>,
    newOrderBy: string
  ) => {
    const isAsc = orderBy === newOrderBy && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(newOrderBy);
  };

  return (
    <Paper className={classes.root}>
      <TableTitle title={title} handleOpenSearch={handleOpenSearch} />
      <TableContainer className={classes.container}>
        <Table>
          <TableHead
            columns={columns}
            orderBy={orderBy}
            order={order}
            handleRequestSort={handleRequestSort}
          />
          <TableBody
            columns={columns}
            rows={rows}
            order={order}
            orderBy={orderBy}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
    </Paper>
  );
};

export default TableComponent;
