import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { RootState } from 'src/redux/rootReducer';
import { User } from 'src/redux/auth/types';
import { signOutRequest } from 'src/redux/auth/actions';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: theme.spacing(1),
    fontSize: theme.spacing(2),
    color: 'white',
  },
}));

const MoreButton: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const moreRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const user: User = useSelector<RootState>(
    (state: RootState) => state.auth.user
  ) as User;

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Button
        className={classes.button}
        ref={moreRef}
        size="large"
        onClick={handleMenuOpen}
      >
        {user && `${user.firstname} ${user.lastname}`}
      </Button>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        elevation={1}
        open={openMenu}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            transform: 'translateY(45%)',
          },
        }}
      >
        <MenuItem onClick={() => history.push('/profile')}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={() => dispatch(signOutRequest())}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default MoreButton;
