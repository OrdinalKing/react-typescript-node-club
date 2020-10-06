import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import { fetchCompetition } from 'src/redux/competition/actions';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import { Competition } from 'src/redux/competition/types';

const CompetitionForm: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();

  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const competitionList = useSelector<RootState>(
    (state) => state.competition.competitions
  ) as Competition[];

  useEffect(() => {
    dispatch(fetchCompetition());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (competitionList) {
      setCompetitions(competitionList);
    }
  }, [competitionList]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newSelected = competitions.map(
        (competition: Competition) => competition.id
      );
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelectOne = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const selectedIndex = selected.indexOf(id);
    let newSelectedCompetitions: number[] = [];

    if (selectedIndex === -1) {
      newSelectedCompetitions = newSelectedCompetitions.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelectedCompetitions = newSelectedCompetitions.concat(
        selected.slice(1)
      );
    } else if (selectedIndex === selected.length - 1) {
      newSelectedCompetitions = newSelectedCompetitions.concat(
        selected.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCompetitions = newSelectedCompetitions.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelectedCompetitions);
  };

  const handleChangePage = (e: any, newPage: number) => {
    console.log('123123', newPage, competitions);
    // setPage(_page);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <CardHeader title="Competition" />
      <Divider />
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selected.length === competitions.length}
                  color="primary"
                  indeterminate={
                    selected.length > 0 && selected.length < competitions.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Current Season Start</TableCell>
              <TableCell align="center">Current Season End</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {competitions
              .splice(0, rowsPerPage)
              .map((competition: Competition) => (
                <TableRow
                  hover
                  key={competition.id}
                  selected={selected.indexOf(competition.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.indexOf(competition.id) !== -1}
                      color="primary"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSelectOne(e, competition.id)
                      }
                      value={selected.indexOf(competition.id) !== -1}
                    />
                  </TableCell>
                  <TableCell align="center">{competition.name}</TableCell>
                  <TableCell align="center">
                    {competition.currentSeason?.startDate}
                  </TableCell>
                  <TableCell align="center">
                    {competition.currentSeason?.endDate}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions>
        <TablePagination
          component="div"
          count={competitions.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

export default CompetitionForm;
