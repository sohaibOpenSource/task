import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
 

const UrgeWithPleasureComponent = () => {
    
    return (
        <CountdownCircleTimer
            isPlaying
            duration={60}
            size={80}
            colors={[['#000000']]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    );
};
export default UrgeWithPleasureComponent;