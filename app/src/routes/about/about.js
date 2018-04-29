//Core
import React, { Component } from 'react';

//CSS
import classes from './about.css';

class About extends Component {
  paragraph1;
  heading1;
  box1;
  paragraph2;
  heading2;
  box2;
  paragraph3;
  heading3;
  box3;
  paragraph4;
  heading4;
  box4;
  xScrollPosition;
  yScrollPosition;

  setTranslate = (xPos, yPos, el) => {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`; 
  }
  
  scrollLoop = () => {
    this.xScrollPosition = window.scrollX;
    this.yScrollPosition = window.scrollY;
    
    this.setTranslate(0, this.yScrollPosition * -1.6, this.heading1);
    this.setTranslate(0, this.yScrollPosition * -.8, this.box1);
    this.setTranslate(0, this.yScrollPosition * .8, this.paragraph1);

    this.setTranslate(0, this.yScrollPosition * -.8, this.box2);
    this.setTranslate(0, this.yScrollPosition * -.8, this.box3);
    this.setTranslate(0, this.yScrollPosition * -.8, this.box4);
    
    if(this.yScrollPosition > 300) {
      this.setTranslate(0, (this.yScrollPosition - 300) * -1.6, this.heading2);
      this.setTranslate(0, (this.yScrollPosition -300) * .8, this.paragraph2);
    }

    if(this.yScrollPosition >= 650) {
      this.setTranslate(0, (this.yScrollPosition - 650) * -1.6, this.heading3);
      this.setTranslate(0, (this.yScrollPosition - 650) * .8, this.paragraph3);
    }

    if(this.yScrollPosition >= 1050) {
      this.setTranslate(0, (this.yScrollPosition - 1050) * -1.6, this.heading4);
      this.setTranslate(0, (this.yScrollPosition - 1050) * .8, this.paragraph4);
    }

    requestAnimationFrame(this.scrollLoop);
  }

  componentDidMount() {
    this.heading1 = document.getElementById('firstSectionH');
    this.box1 = document.getElementById('firstSection');
    this.paragraph1 = document.getElementById('firstSectionP')

    this.heading2 = document.getElementById('secondSectionH');
    this.box2 = document.getElementById('secondSection');
    this.paragraph2 = document.getElementById('secondSectionP')

    this.heading3 = document.getElementById('thirdSectionH');
    this.box3 = document.getElementById('thirdSection');
    this.paragraph3 = document.getElementById('thirdSectionP')

    this.heading4 = document.getElementById('fourthSectionH');
    this.box4 = document.getElementById('fourthSection');
    this.paragraph4 = document.getElementById('fourthSectionP')

    requestAnimationFrame(this.scrollLoop);
  }

  render() {
    return (
      <div className={classes.about}>
        <div className={classes.spacer}></div>
        <section id='firstSection'>
          <h1 id='firstSectionH'><span>M</span><span>I</span><span>S</span><span>S</span><span>I</span><span>O</span><span>N</span></h1>
          <p id='firstSectionP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus dolor metus, et congue nunc laoreet eget. Morbi a iaculis massa. Nunc nec risus et dolor condimentum iaculis. Sed posuere dui est, sed eleifend ipsum hendrerit eleifend. Vivamus laoreet justo at sapien ornare, eu consequat tellus finibus.</p>
        </section>
        <section id='secondSection'>
          <h1 id='secondSectionH'><span>V</span><span>I</span><span>S</span><span>I</span><span>O</span><span>N</span></h1>
          <p id='secondSectionP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus dolor metus, et congue nunc laoreet eget. Morbi a iaculis massa. Nunc nec risus et dolor condimentum iaculis. Sed posuere dui est, sed eleifend ipsum hendrerit eleifend. Vivamus laoreet justo at sapien ornare, eu consequat tellus finibus.</p>
        </section>
        <section id='thirdSection'>
          <h1 id='thirdSectionH'><span>H</span><span>I</span><span>S</span><span>T</span><span>O</span><span>R</span><span>Y</span></h1>
          <p id='thirdSectionP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus dolor metus, et congue nunc laoreet eget. Morbi a iaculis massa. Nunc nec risus et dolor condimentum iaculis. Sed posuere dui est, sed eleifend ipsum hendrerit eleifend. Vivamus laoreet justo at sapien ornare, eu consequat tellus finibus.</p>
        </section>
        <section id='fourthSection'>
          <h1 id='fourthSectionH'><span>C</span><span>R</span><span>E</span><span>A</span><span>T</span><span>O</span><span>R</span></h1>
          <p id='fourthSectionP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus dolor metus, et congue nunc laoreet eget. Morbi a iaculis massa. Nunc nec risus et dolor condimentum iaculis. Sed posuere dui est, sed eleifend ipsum hendrerit eleifend. Vivamus laoreet justo at sapien ornare, eu consequat tellus finibus.</p>
        </section>
      </div>
    );
  }
}

export default About;