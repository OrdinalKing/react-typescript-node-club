import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { RootState } from 'src/redux/rootReducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);

const CustomBackdrop: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const loading = useSelector<RootState>(
    (state: RootState) =>
      state.auth.loading ||
      state.competition.loading ||
      state.player.loading ||
      state.team.loading
  );

  useEffect(() => {
    setOpen(!!loading);
  }, [loading]);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default CustomBackdrop;
