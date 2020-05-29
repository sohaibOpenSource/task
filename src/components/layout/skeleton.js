import React from 'react';
import { Facebook, Instagram } from 'react-content-loader'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Card} from 'semantic-ui-react'



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
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
 
    return (
      
      <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <div style={userStyle}>
            {[0, 1, 2, 3, 4,5].map(user => (
                    <Card style={{width:'350px', height:'280px'}}>
                      <Card.Content>
                          <Facebook />
                      </Card.Content>
                    </Card>
          ))}
           </div>
        </Grid>
      </Grid>
      </Grid>
    );
  }
;

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '1rem',
  width: '70%',
  float: 'left'
};

export default Users;