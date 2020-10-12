import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import Table from 'src/components/Table';
import Topbar from 'src/components/Topbar';
import { Player } from 'src/models';
import { RootState } from 'src/redux/rootReducer';
import { getPlayers } from 'src/redux/player/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  table: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(2),
  },
}));

const Home: React.FC<any> = (): JSX.Element => {
  const columns = [
    {
      header: 'ID',
      field: 'id',
      sortable: true,
      width: 100,
    },
    {
      header: 'Name',
      field: 'name',
      sortable: true,
      width: 300,
    },
    {
      header: 'Position',
      field: 'position',
      sortable: true,
      width: 200,
    },
    {
      header: 'Date of Birth',
      field: 'dateOfBirth',
      sortable: true,
      width: 250,
      type: 'birthday',
    },
  ];
  const classes = useStyles();
  const dispatch = useDispatch();
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const players: Player[] = useSelector<RootState>(
    (state: RootState) => state.player.players
  ) as Player[];

  useEffect(() => {
    dispatch(getPlayers(''));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (players && players.length) {
      setPlayerList([...players]);
    }
  }, [players]);

  const handleOpenSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenSearch(true);
  };

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.table}>
        <Table
          defaultOrderBy="name"
          columns={columns}
          rows={playerList}
          title="Player"
          handleOpenSearch={handleOpenSearch}
        />
      </div>
    </div>
  );
};

export default Home;
