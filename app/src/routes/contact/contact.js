//Core
import React, { Component } from 'react';

//CSS
import classes from './contact.css';

class Contact extends Component {
  state = {
    contactClasses: [classes.contact],
    statement: 'Get In Touch'
  }

  componentDidMount() {
    setTimeout(() => {
      let newContactClasses = [...this.state.contactClasses]
      newContactClasses.push(classes.show);
      this.setState({...this.state, contactClasses: newContactClasses})
    }, 300)
  }

  changeStatement = (event, string) => {
    event.preventDefault();
    this.setState({...this.state, statement: string})
  };

  render() {
    return (
      <div className={this.state.contactClasses.join(' ')}>
        <div className={classes.row}>
          <a href='mailto:temple@templedesignsolutions.com'>
            <div className={[classes.block, classes.top_left].join(' ')} onMouseEnter={(event) => {this.changeStatement(event, "I've Got Mail")}} onMouseLeave={(event) => {this.changeStatement(event, "Get In Touch")}}>
              <i className="far fa-envelope"></i>
            </div>
          </a>
          <a href='tel:6143989960'>
            <div className={[classes.block, classes.top_right].join(' ')} onMouseEnter={(event) => {this.changeStatement(event, "Call Or Text 614-398-9960")}} onMouseLeave={(event) => {this.changeStatement(event, "Get In Touch")}}>
              <i className="fas fa-mobile"></i>
            </div>
          </a>
        </div>
        <div className={classes.row}>
          <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/ryantemple31'>
            <div className={[classes.block, classes.bottom_left].join(' ')} onMouseEnter={(event) => {this.changeStatement(event, "Lets Be Friends")}} onMouseLeave={(event) => {this.changeStatement(event, "Get In Touch")}}>
              <i className="fab fa-facebook-square"></i>
            </div>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/templedotdesign'>
            <div className={[classes.block, classes.bottom_right].join(' ')} onMouseEnter={(event) => {this.changeStatement(event, "A Little Birdie Told Me")}} onMouseLeave={(event) => {this.changeStatement(event, "Get In Touch")}}>
              <i className="fab fa-twitter-square"></i>
            </div>
          </a>
        </div>
        <p style={{marginTop: '20px', fontSize: '120%'}}>{this.state.statement}</p>
      </div>
    );
  }
}

export default Contact;