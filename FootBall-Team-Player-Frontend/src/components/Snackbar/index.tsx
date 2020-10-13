import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { RootState } from 'src/redux/rootReducer';
import { SeverityType } from 'src/utils/constants';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomizedSnackbar: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const message: string = useSelector<RootState>(
    (state: RootState) => state.snackbar.message
  ) as string;
  const severity: SeverityType = useSelector<RootState>(
    (state: RootState) => state.snackbar.severity
  ) as SeverityType;

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message, severity]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
