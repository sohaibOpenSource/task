import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import TwitterContext from '../../context/twitter/twitterContext';
import Skeleton from '../layout/skeleton'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const Users = () => {
    const twitterContext = useContext(TwitterContext);
    const [spacing, setSpacing] = React.useState(1);
    const classes = useStyles();


  const { loading, users } = twitterContext;

  if (loading) {
      return <Skeleton />;
  } else {
    return (

      <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <div style={userStyle}>
            {users.map(user => (
                <Grid  item>
                    <UserItem key={user.id} user={user} />
                </Grid>
          ))}
           </div>
        </Grid>
      </Grid>
      </Grid>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem',
  width: '70%',
  float: 'left'
};
export default Users;
