//Core
import React from 'react';

//CSS
import classes from './row.css';

const row = (props) => {
  let attachedClass = '';
  if(props.reverse) {
    attachedClass = classes.reversibleRow;
  } else {
    attachedClass = classes.row;
  }
  const style = {
    justifyContent: props.justify || 'space-around',
    alignItems: props.align || 'center',
    height: props.height || '100%',
    flexWrap: props.wrap || 'wrap'
  }
  return (
    <div className={attachedClass} style={style}>
      {props.children}
    </div>
  );
};

export default row;