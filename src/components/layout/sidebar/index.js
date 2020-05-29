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
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useState } from 'react';
import Portfolio from './element/portfolio';
import Selected from './element/select';
import { Card, Icon } from 'semantic-ui-react'
import './style.css';

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

export default function PinnedSubheaderList() {
    
    const classes = useStyles();
    
    return (
        <div className='liste' subheader={< li />}>
            <div className='card text-center'>
                <Portfolio />
            </div>
            <div >
                <Selected />
                <h1 style={{marginTop:'60px',textAlign: 'center'}}> Top 2 Liked </h1>
            </div>
            {
            [0, 1].map((sectionId) => (
                  <Card style={{width:'90%' , margin:'10px'}}>
                      <Card.Content header='About Amy' />
                      <Card.Content description='Excited to play against him Again! Cant wait to play on @ManUtd Old Trafford another time for @UNICEF ZZ #beckham' />
                      <Card.Content extra>
                      <Icon name='heart' size='big'/>
                      </Card.Content>
                  </Card>
      ))}
      
        
</div>
  );
}
