//Core
import React from 'react';
//import { NavLink } from 'react-router-dom';

//Components
import NavigationItem from './navigationItem/navigationItem';

//CSS
import classes from './navigation.css';

//Assets
//import chess from '../../../assets/chess64.png';

const navigation = () => {
  return (
    <div className={classes.navigation}>
      <NavigationItem to='/' iconClass='fa-home' label='Home'/>
      <NavigationItem to='/work' iconClass='fa-book' label='Work'/>
      <NavigationItem to='/about' iconClass='fa-info' label='About'/>
      <NavigationItem to='/contact' iconClass='fa-at' label='Contact'/>
    </div>
  );
};

export default navigation;