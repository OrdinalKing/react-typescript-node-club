import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1.5, 1.5, 0, 3.5),
  },
  title: {
    paddingTop: theme.spacing(1.5),
  },
  search: {},
}));

interface IProps {
  title: string;
  showSearch: boolean;
  handleOpenSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TableTitle: React.FC<IProps> = ({
  title,
  showSearch,
  handleOpenSearch,
}: IProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>
      {showSearch && (
        <IconButton className={classes.search} onClick={handleOpenSearch}>
          <Search />
        </IconButton>
      )}
    </div>
  );
};

export default TableTitle;
