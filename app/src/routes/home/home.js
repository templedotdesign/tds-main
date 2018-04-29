//Core
import React, { Component } from 'react';

//Components
import WorkPanel from '../../components/workPanel/workPanel';

//CSS
import classes from './home.css';

class Home extends Component {
  state = {
    tabClasses: [classes.pink],
    quoteClasses: [classes.quote],
    workClasses: [classes.work],
    showWork: false
  }

  componentDidMount() {
    setTimeout(() => {
      let newTabClasses = [...this.state.tabClasses]
      newTabClasses.push(classes.show)
      this.setState({...this.state, tabClasses: newTabClasses})
    }, 300)
    setTimeout(() => {
      let newQuoteClasses = [...this.state.quoteClasses]
      let newWorkClasses = [...this.state.workClasses]
      newQuoteClasses.push(classes.show)
      newWorkClasses.push(classes.show)
      this.setState({...this.state, quoteClasses: newQuoteClasses, workClasses: newWorkClasses})
    }, 600)
  }

  showWorkPanel = (event) => {
    event.preventDefault();
    this.setState({...this.state, showWork: true})
  };

  render() {
    return (
      <div className={classes.home}>
        <div className={classes.row_left}>
          <div className={this.state.tabClasses.join(' ')}>
            <h1>Temple</h1>
            <h1>Design</h1>
            <h1>Solutions</h1>
          </div>
        </div>
        <div className={classes.row_right}>
          <div onClick={this.showWorkPanel} className={this.state.workClasses.join(' ')}>
          <i class="fas fa-long-arrow-alt-right" style={{fontSize: '4rem'}}></i>
          <p>Work</p>
          </div>
          <div className={this.state.quoteClasses.join(' ')}>
            <h1>We Enhance The Web <span>Experience</span></h1> 
            <h1>Through Artful, Intelligent <span>Design</span></h1>
            <h1>And Technological <span>Innovations</span></h1>
          </div>
        </div>
        <WorkPanel show={this.state.showWork}/>
      </div>
    );
  }
}

export default Home;