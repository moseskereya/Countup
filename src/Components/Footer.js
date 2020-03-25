import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 

        const years = new Date();
        return ( 
            <div className="footer">
                <h5> Moses Codes : &copy; {years.getFullYear()}</h5>
            </div>
         );
    }
}
 
export default Footer;