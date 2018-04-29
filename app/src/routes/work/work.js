import React from 'react';

import WorkItem from './workItem/workItem';
import Row from '../../components/shared/row/row';

import classes from './work.css';

const work = () => {
  return (
    <div className={classes.work}>
      <Row height='50%'>
        <WorkItem heading='Heading' subheading='Subheading'/>
        <WorkItem heading='Heading' subheading='Subheading'/>
        <WorkItem heading='Heading' subheading='Subheading'/>
        <WorkItem heading='Heading' subheading='Subheading'/>
        <WorkItem heading='Heading' subheading='Subheading'/>
        <WorkItem heading='Heading' subheading='Subheading'/>
      </Row>
    </div>
  );
};

export default work;