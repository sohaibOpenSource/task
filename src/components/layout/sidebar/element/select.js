import React, {  Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from 'semantic-ui-react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Grid, Image ,Segment} from 'semantic-ui-react'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '30%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 600
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function Selected() {
    const classes = useStyles();
    const [days, setDays] = React.useState('');

    const handleChange = (event) => {
        setDays(event.target.value);
    };
    return(

          
           <Grid columns='equal' style={{width:'90%' ,direction:'ltr', margin:'10px'}}>
              <Grid.Column width={8}>
                <Segment><FormControl style={{width:'90%'}}>

                        <InputLabel id="simple-select-label">Days</InputLabel>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            value={days}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}> 1 Day</MenuItem>
                            <MenuItem value={7}> 7 Days</MenuItem>
                            <MenuItem value={30}> 30 Days</MenuItem>
                        </Select>
                    </FormControl></Segment>
              </Grid.Column>
              <Grid.Column >
                  <Segment><Icon name='heart' size='big' /></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment><Icon loading name='retweet' size='big' /></Segment>
              </Grid.Column>
            </Grid>
      )
}
