import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Drawer, Typography } from '@material-ui/core';

import FilterOption from 'src/components/FilterOption';
import { OperatorType } from 'src/utils/constants';

const useStyles = makeStyles({
  root: {},
  list: {
    width: 250,
    margin: 50,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    marginLeft: 75,
    marginTop: 30,
    width: 100,
  },
});

interface IProps {
  state: boolean;
  toggleDrawer: (e: unknown, reason: unknown, state: boolean) => void;
  handleSearch: (e: React.MouseEvent<HTMLButtonElement>, filters: any) => void;
}

const SearchDrawer: React.FC<IProps> = ({
  state,
  toggleDrawer,
  handleSearch,
}: IProps): JSX.Element => {
  const classes = useStyles();

  const [filters, setFilters] = useState<any>({
    id: {
      value: '',
      option: 'EQ',
    },
    name: {
      value: '',
      option: 'EQ',
    },
    position: {
      value: '',
      option: 'EQ',
    },
    dateOfBirth: {
      value: '',
      option: 'EQ',
    },
  });

  const idOps: OperatorType[] = ['EQ'];
  const nameOps: OperatorType[] = ['EQ', 'WC', 'SW', 'EW', 'IN'];
  const posOps: OperatorType[] = ['EQ', 'WC', 'SW', 'EW', 'IN'];
  const dateOfBirth: OperatorType[] = ['EQ', 'GT', 'GTE', 'LT', 'LTE'];

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: {
        option: filters[e.target.name].option,
        value: e.target.value,
      },
    });
  };

  const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: {
        value: filters[e.target.name].value,
        option: e.target.value,
      },
    });
  };

  return (
    <Drawer
      className={classes.root}
      anchor="right"
      open={state}
      onClose={(e: unknown, r: unknown) => toggleDrawer(e, r, false)}
    >
      <div className={classes.list}>
        <Typography gutterBottom align="center" variant="h6">
          Advanced Search
        </Typography>
        <FilterOption
          label="ID"
          name="id"
          options={idOps}
          value={filters.id.value}
          operator={filters.id.option as OperatorType}
          handleChangeValue={handleChangeValue}
          handleChangeOption={handleChangeOption}
        />
        <FilterOption
          label="Name"
          name="name"
          options={nameOps}
          value={filters.name.value}
          operator={filters.name.option as OperatorType}
          handleChangeValue={handleChangeValue}
          handleChangeOption={handleChangeOption}
        />
        <FilterOption
          label="Position"
          name="position"
          options={posOps}
          value={filters.position.value}
          operator={filters.position.option as OperatorType}
          handleChangeValue={handleChangeValue}
          handleChangeOption={handleChangeOption}
        />
        <FilterOption
          label="Date of Birth"
          name="dateOfBirth"
          options={dateOfBirth}
          value={filters.dateOfBirth.value}
          operator={filters.dateOfBirth.option as OperatorType}
          handleChangeValue={handleChangeValue}
          handleChangeOption={handleChangeOption}
        />
        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleSearch(e, filters)
          }
        >
          Search
        </Button>
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
