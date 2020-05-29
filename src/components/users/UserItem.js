import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Segment } from 'semantic-ui-react'
import { Button, Card, Image ,Icon } from 'semantic-ui-react'


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        position: 'absolute',
        top: '0',
        right: '0',
    },
    hero: {
    position: 'relative'
    },
    icon: {
    position: 'absolute',
    right: '10px',
    top: '5%',
    },
   
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const UserItem = ({ user: { created_date, image, text } }) => {

    const classes = useStyles();
    
    const remove = (
                     <div>
                    <h3>{created_date}</h3>
                    <IconButton aria-label="delete" className={classes.icon}>
                        <DeleteIcon />
                    </IconButton>
                    </div>)

    return (

          
          <Card style={{width:'350px'}}>
            <Card.Content header={remove} />
            <Card.Content description={text} style={{height:'140px'}}/>
            <Card.Content extra>
              <Icon name='heart' />0 Friends
            </Card.Content>
          </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
