import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  FormControlLabel,
  TextField,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { OperatorType } from 'src/utils/constants';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  input: {
    margin: theme.spacing(3, 0.5, 0, 0.5),
    width: 'calc(100% - 10px)',
  },
  radio: {
    margin: theme.spacing(0, 0.5, 1, 0.5),
  },
}));

interface IProps {
  name: string;
  label: string;
  value: string;
  operator: OperatorType;
  options: OperatorType[];
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterOption: React.FC<IProps> = ({
  value,
  label,
  name,
  operator,
  options,
  handleChangeValue,
  handleChangeOption,
}: IProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.input}
        label={label}
        value={value}
        name={name}
        onChange={handleChangeValue}
        id="outlined-margin-normal"
        margin="dense"
        variant="outlined"
      />
      <RadioGroup
        row
        aria-label={name}
        name={name}
        value={operator}
        onChange={handleChangeOption}
      >
        {options.map((option) => (
          <FormControlLabel
            className={classes.radio}
            key={option}
            value={option}
            label={option}
            control={<Radio color="primary" />}
            labelPlacement="bottom"
          />
        ))}
      </RadioGroup>
    </div>
  );
};
export default FilterOption;
