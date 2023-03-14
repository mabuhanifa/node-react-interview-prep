import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({count,incrementCount}) => {
    return (
        <div>
      <button onMouseOver={incrementCount}>Hovered {count} Times</button>
    </div>
    );
};

export default withCounter(HoverCounter);