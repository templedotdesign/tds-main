//Core
import React from 'react';

const row = (props) => {
  const style = {
    justifyContent: props.justify || 'space-around',
    alignItems: props.align || 'center'
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default row;