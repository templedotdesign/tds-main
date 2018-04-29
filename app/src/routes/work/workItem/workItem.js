import React from 'react';

import classes from './workItem.css';

const workItem = (props) => {
  return (
    <div className={classes.workItem}>
      <h1>{props.heading}</h1>
      <h3>{props.subheading}</h3>
    </div>
  );
}

export default workItem;