//Core
import React from 'react';

//Components
import WorkItem from './workItem/workItem';

//CSS
import classes from './workPanel.css';

const workPanel = (props) => {
  let panelClasses = [classes.workPanel]
  if(props.show === true) {
    panelClasses.push(classes.show)
  } 
  return (
    <div className={panelClasses.join(' ')}>
      <WorkItem to='1'/>
      <WorkItem to='2'/>
      <WorkItem to=''/>
      <WorkItem to=''/>
      <WorkItem to=''/>
    </div>
  );
};

export default workPanel;