import React, { Component } from 'react';
import CountUp  from 'react-countup'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home">
                <div>
                    <div className="hero hero-1">
                        <div  className="counter">
                            <h4>A self tought Programmer with </h4>
                          <span>
                            <CountUp end = {12345} />
                          </span> 
                           <h5>Projects</h5>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;