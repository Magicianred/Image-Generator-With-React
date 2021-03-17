import React, { Component } from 'react';
import FirstInput from '../FirstInput';
import SecondInput from '../SecondInput';
import './style.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <FirstInput/>
            <SecondInput/>
        </React.Fragment> );
    }
}
 
export default Header;

 
