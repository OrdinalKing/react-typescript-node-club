import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  lighten,
  Theme,
} from '@material-ui/core/styles';
import { CloudDownload } from '@material-ui/icons';

import { updateCompetition } from 'src/redux/competition/actions';

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  })
);

interface EnhancedTableToolbarProps {
  selected: number[];
  title: string;
}

const EnhancedTableToolbar: React.FC<EnhancedTableToolbarProps> = (
  props: EnhancedTableToolbarProps
): JSX.Element => {
  const classes = useToolbarStyles();
  const dispatch = useDispatch();
  const { selected, title } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(updateCompetition(selected));
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: selected.length > 0,
      })}
    >
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
      {selected.length > 0 && (
        <Tooltip title="Import/Update selected leagues" color="secondary">
          <IconButton aria-label="delete" onClick={handleClick}>
            <CloudDownload />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
