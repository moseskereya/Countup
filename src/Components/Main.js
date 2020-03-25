import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="item-container">
               <div className="item1">
                   <div>
                       <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img"/>
                   </div>
               </div>
               <div className="item2">
               <div className="details">
                <h4>About Us</h4>
                   <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <button type="text" className="button">Hire Me</button>
               </div>
            </div>
         );
    }
}
 
export default Main;