//Core 
import React from 'react';

//CSS
import classes from './column.css';

const column = (props) => {
  let style = {
    justifyContent: props.justify || 'space-around',
    alignItems: props.align || 'center',
    width: props.width || '100%'
  };
  return (
    <div className={classes.column} style={style}>
      {props.children}
    </div>
  );
};

export default column;