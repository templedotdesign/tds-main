//Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import classes from './workItem.css';

class WorkItem extends Component {
  goTo = (event, to) => {
    this.props.history.push(`/work/${to}`)
  }


  render() {
    return (
      <div className={classes.workItem} onClick={(event) => {this.goTo(event, this.props.to)}}></div>
    );
  }
}

export default withRouter(WorkItem);