import React, { Fragment, useContext, useEffect} from 'react';
import TwitterContext from '../../../../context/twitter/twitterContext';
import { Card, Feed } from 'semantic-ui-react'


export default function Portfolio(){
    const twitterContext = useContext(TwitterContext);

    const { getUser, loading, user } = twitterContext;
    useEffect(() => {
        getUser(login);
        // eslint-disable-next-line
    }, []);
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,

    } = user;

	return (
        	
        <Card style={{width:'90%' ,direction:'ltr', margin:'10px'}}>
    <Card.Content>
      <Card.Header>Portfolio</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label>
             <img
                        src='./sample.png'
                        className='round-img'
                        alt=''
                        style={{ width: '150px' }}
                    />
          </Feed.Label> 
          <Feed.Content style={{textAlign: 'center'}} >
            <Feed.Date content='1' />
            <Feed.Summary>
              <strong>Name : </strong> {login}
              <h3>Bio :</h3>
              <p>{bio}</p>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Content>
            <Feed.Date content='Now' />
            <Feed.Summary>
                <div className='badge badge-success'>Following: {following}</div>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Content>
            <Feed.Date content='Now' />
            <Feed.Summary>
              <div className='badge badge-primary'>Followers: {followers}</div>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>)

}