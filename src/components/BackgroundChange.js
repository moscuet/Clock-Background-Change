
import React, { Component } from 'react'
import './BackgroundChange.css'
import {timeDate} from './displayTime.js'
const date = new Date()
const hour = date.getHours()
let image, greetings
let currentUsers=['Rahman','David','Emanuel','Atik']
const currentUser = ()=>  {
  return currentUsers[Math.floor(Math.random()*4)] 
}

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
      user:currentUser(),
      greetings:greetings,
      image:image,
      time:timeDate()  
}


// setInterval(function(){
//   myFunc(1);
// }, 500);

// setInterval(function(){
//   myFunc(2);
// }, 1000);

// setInterval(function(){
//   myFunc(3);
// }, 2000);
componentDidMount() {
   this.interval = setInterval(() => this.setUser(), 5000)
   this.intervala = setInterval(() => this.setTime(), 1000);
  }
  setUser= ()=>{
    this.setState({user:currentUser() });
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
    style={{ backgroundImage:`url(${this.state.image})`}} >
        <h2> {this.state.greetings}{this.state.user}</h2>
        <h2> {this.state.time}</h2>     
    </div>
    )
  }
}

export default BackgroundChange

  
 
