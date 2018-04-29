//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import Row from '../../../shared/row/row';

//CSS
import classes from './navigationItem.css';

const navigationItem = (props) => {
  let iconClasses = ['fas', props.iconClass]
  return (
    <div className={classes.navigationItem}>
      <NavLink to={props.to} activeClassName={classes.active} exact>
        <Row justify='space-between'>
          <i className={iconClasses.join(' ')}></i>
          <p style={{padding: '5px 0'}}>{props.label}</p>
        </Row>
      </NavLink>
    </div>
  );
};

export default navigationItem;