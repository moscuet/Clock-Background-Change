
import React, { Component } from 'react'
import './BackgroundChange.css'
import {timeDate} from './displayTime.js'
const date = new Date()
const hour = date.getHours()
let image, greetings
switch(true) {
    case(hour<5):
        greetings= 'Good Night!'
        image = 'https://www.brianpasko.com/wp-content/uploads/2013/06/portland-nature-photographer-stars-night-trillum-lake-portrait-fine-art-picture-senior-family.jpg'
        break;
    case (hour<11):
           greetings= 'Good Morning!'
           image = 'https://img1.goodfon.com/original/1920x1080/5/e0/zima-utro-les-sneg-solnce-luchi.jpg'          
            break;
    case (hour<=16):
        greetings='Good Afternoon!'
        image = 'https://images.unsplash.com/photo-1572283867842-942db543d87f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        break;
    case (hour<=19):
        greetings='Good Evening!'
        image = 'https://petapixel.com/assets/uploads/2014/06/photopills1.jpg'
        break;
    default: 
        greetings='Good Night!'
        image = 'https://www.brianpasko.com/wp-content/uploads/2013/06/portland-nature-photographer-stars-night-trillum-lake-portrait-fine-art-picture-senior-family.jpg'  
}

class BackgroundChange extends Component {
  state = {
    backGround: {
      currentUser: 'Mostafizur Rahman',
      greetings:greetings,
      image:image,
      time:timeDate()
    }
}

componentDidMount() {
    this.interval = setInterval(() => this.setTime(), 1000);
  }
  setTime = () => {
    this.setState({time:timeDate() });
  };
  componentWillMo() {
    clearInterval(this.interval);
  }
render() {
  return(
    <div className = 'img-wrapper' 
    style={{ backgroundImage:`url(${this.state.backGround.image})`}} >
        <h2> {this.state.backGround.greetings}</h2>
        <h2> {timeDate()}</h2>     
    </div>
    )
  }
}

export default BackgroundChange

  
 
