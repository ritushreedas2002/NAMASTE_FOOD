import React, { Component } from 'react';
import UserClass from './UserClass';

class About extends Component {
    constructor(){
        super();
        console.log("Parent constructor");

        
    }

    componentDidMount(){
        console.log(" Parent componentdidmount");
        //API CaLL
        
    }

  render() {
    console.log(" Parent render");
    return (
      <div>
        
        {/* <User /> */}
        <UserClass name="First" location="Address" />
        {/*<UserClass name="Second" location="Address" />
         <h1>About</h1>
        <h2>This is the about page of Namaste Food</h2> */}
      </div>
    );
  }
}

export default About;

/* 
Parent Constructor

Parent render

First Child constructor
First Child render

Second child constructor
Second Child render

<DOM is updated in a single batch>
First child componentdidmount
second child componentdidmount

Parent componentdidmount
*/

/**
 * when two child are called React will optimise by patching both the children so render phase occurs together and then the commit phase together.
 */