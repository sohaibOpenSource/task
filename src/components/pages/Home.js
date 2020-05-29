import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Sidebar from '../layout/sidebar/index.js';
import { Grid, Segment } from 'semantic-ui-react'


const Home = () => (
  <Fragment>
         <Grid columns={2} padded>
            <Grid.Row stretched>
              <Grid.Column width={10} >
                <Segment><Users /></Segment>
              </Grid.Column>
              <Grid.Column only='computer' width={6}>
                <Segment><Sidebar /></Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
  </Fragment>
);

export default Home;
