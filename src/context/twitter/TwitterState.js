import React, { useReducer } from 'react';
import axios from 'axios';
import TwitterContext from './twitterContext';
import TwitterReducer from './twitterReducer';
import Twit from 'twit';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
} from '../types';



let consumer_key;
let consumer_secret;
let access_token;
let access_token_secret;

if (process.env.NODE_ENV !== 'production') {
  consumer_key = process.env.REACT_APP_TWITTER_CLIENT_ID;
  consumer_key = process.env.REACT_APP_TWITTER_CLIENT_SECRET;
} else {
  consumer_key = process.env.TWITTER_CLIENT_ID;
  consumer_secret = process.env.TWITTER_CLIENT_SECRET;
}



const TwitterState = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  };

  const [state, dispatch] = useReducer(TwitterReducer, initialState);

  // Search Tweets
  const searchUsers = async text => {
      setLoading();
      

//    const res = await axios.get(
//      `https://api.twitter.com/search/users?q=${text}&client_id=${consumer_key}&client_secret=${consumer_secret}`
//    );
      // just for test
      const res = await axios.get('js/data.json');
      console.log(res.data);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.tweets
    });
     setTimeout(() => dispatch({ type: CLEAR_USERS }), 60000);
  };

  // Get User
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.twitter.com/users/${username}?client_id=${consumer_key}&client_secret=${consumer_secret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };


  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TwitterContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </TwitterContext.Provider>
  );
};

export default TwitterState;
