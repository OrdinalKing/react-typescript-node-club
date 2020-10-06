import React from 'react';
import clsx from 'clsx';
import { IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  lighten,
  Theme,
} from '@material-ui/core/styles';
import { CloudDownload } from '@material-ui/icons';

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
  numSelected: number;
  title: string;
}

const EnhancedTableToolbar: React.FC<EnhancedTableToolbarProps> = (
  props: EnhancedTableToolbarProps
): JSX.Element => {
  const classes = useToolbarStyles();
  const { numSelected, title } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
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
      {numSelected > 0 && (
        <Tooltip title="Import/Update selected leagues" color="secondarys">
          <IconButton aria-label="delete">
            <CloudDownload />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
