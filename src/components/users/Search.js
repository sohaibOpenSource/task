import React, { useContext } from 'react';
import TwitterContext from '../../context/twitter/twitterContext';




const Search = () => {
    const twitterContext = useContext(TwitterContext);


  return (
    <div style={{maxWidth: '70%', margin: '20px'}}>
      {twitterContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={twitterContext.getUser}
        >
          Load New Tweets
        </button>
          )}
          
    </div>
  );
};

export default Search;
