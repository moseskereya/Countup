import React, { Component } from 'react';
class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav>
                    <div className="title">
                        Dev
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Nav;