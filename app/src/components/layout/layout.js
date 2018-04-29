//Core
import React from 'react';

//Components
import Wrapper from '../shared/wrapper/wrapper';
import Navigation from './navigation/navigation';

const layout = (props) => {
  return (
    <Wrapper>
      <Navigation/>
      {props.children}
    </Wrapper>
  );
}

export default layout;