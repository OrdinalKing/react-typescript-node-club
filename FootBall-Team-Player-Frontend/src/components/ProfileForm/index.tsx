import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { User } from 'src/models';
import * as authActions from 'src/redux/auth/actions';
import { ValidateEmail, ValidatePassword } from 'src/utils';
import { RootState } from 'src/redux/rootReducer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: theme.spacing(4),
    width: '100%',
  },
  fortgot: {
    marginTop: '2px',
  },
  buttonProgress: {
    color: 'primary',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -5,
    marginLeft: -12,
  },
}));

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f3f3a6',
    color: 'rgba(0, 0, 0, 0.87)',
    width: '100%',
    maxWidth: theme.spacing(90),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const ProfileForm: React.FC<any> = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState<User>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [oldPwd, setOldPwd] = useState<string>('');
  const [confirmPwd, setConfirmPwd] = useState<string>('');
  const [showOldPwd, setShowOldPwd] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState<boolean>(false);
  const [openEmailTooltip, setOpenEmailToolTip] = useState<boolean>(false);
  const [openPwdTooltip, setOpenPwdTooltip] = useState<boolean>(false);
  const [openConfirmPwdTooltip, setOpenConfirmPwdTooltip] = useState<boolean>(
    false
  );

  const loginUser: User = useSelector<RootState>(
    (state: RootState) => state.auth.user
  ) as User;

  useEffect(() => {
    setUser(loginUser);
  }, [loginUser]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      authActions.updateProfile({
        ...user,
        oldPassword: oldPwd,
      })
    );
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.go(-1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.fields}>
        <TextField
          required
          fullWidth
          label="First Name"
          name="firstname"
          onChange={handleChange}
          value={user.firstname}
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          label="Last Name"
          name="lastname"
          onChange={handleChange}
          value={user.lastname}
          variant="outlined"
        />
        <HtmlTooltip
          PopperProps={{ disablePortal: true }}
          onClose={() => setOpenEmailToolTip(false)}
          open={openEmailTooltip}
          disableHoverListener
          placement="bottom-start"
          arrow
          title={
            <>
              {ValidateEmail(user.email).map((error) => (
                <Typography key={error} color="inherit">
                  {error}
                </Typography>
              ))}
            </>
          }
        >
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={handleChange}
            onFocus={() => setOpenEmailToolTip(!!ValidateEmail(user.email))}
            onBlur={() => setOpenEmailToolTip(false)}
            value={user.email}
            variant="outlined"
          />
        </HtmlTooltip>
        <FormControl variant="outlined" fullWidth required>
          <InputLabel htmlFor="password">Old Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showOldPwd ? 'text' : 'password'}
            value={oldPwd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOldPwd(e.target.value)
            }
            name="oldPassword"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  tabIndex="-1"
                  aria-label="toggle password visibility"
                  aria-describedby="helper-text"
                  onClick={() => setShowOldPwd(!showOldPwd)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <HtmlTooltip
          PopperProps={{ disablePortal: true }}
          onClose={() => setOpenPwdTooltip(false)}
          open={openPwdTooltip}
          disableHoverListener
          placement="bottom-start"
          arrow
          title={
            <>
              {ValidatePassword(user.password).map((error) => (
                <Typography key={error} color="inherit">
                  {error}
                </Typography>
              ))}
            </>
          }
        >
          <FormControl variant="outlined" fullWidth required>
            <InputLabel htmlFor="password">New Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={user.password}
              onChange={handleChange}
              onFocus={() =>
                setOpenPwdTooltip(!!ValidatePassword(user.password))
              }
              onBlur={() => setOpenPwdTooltip(false)}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    tabIndex="-1"
                    aria-label="toggle password visibility"
                    aria-describedby="helper-text"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </HtmlTooltip>
        <HtmlTooltip
          PopperProps={{ disablePortal: true }}
          onClose={() => setOpenConfirmPwdTooltip(false)}
          open={openConfirmPwdTooltip}
          disableHoverListener
          placement="bottom-start"
          arrow
          title={
            <Typography color="inherit" variant="subtitle1">
              Password is not matching
            </Typography>
          }
        >
          <FormControl variant="outlined" fullWidth required>
            <InputLabel htmlFor="confirmPassword">Comfirm Password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              type={showConfirmPwd ? 'text' : 'password'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPwd(e.target.value)
              }
              onFocus={() =>
                setOpenConfirmPwdTooltip(user.password !== confirmPwd)
              }
              onBlur={() => setOpenConfirmPwdTooltip(false)}
              value={confirmPwd}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    tabIndex="-1"
                    aria-label="toggle password visibility"
                    aria-describedby="helper-text"
                    onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                  >
                    {showConfirmPwd ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </HtmlTooltip>
      </div>
      <div>
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit}
        >
          Update Profile
        </Button>
        <Button
          className={classes.submitButton}
          color="primary"
          variant="contained"
          size="large"
          onClick={handleBack}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default ProfileForm;
