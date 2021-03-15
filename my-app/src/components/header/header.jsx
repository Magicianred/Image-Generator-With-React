import React, { Component } from 'react';

 class Header extends Component{
    state = { 
        count: 0
    }

    myFunction = () =>{
        this.setState(() => {
            return { count: 10}});
            console.log(this.state.count)
     }

    render() {
        return (<h1 onClick = {this.myFunction}>{this.state.count}</h1>)   
    }
}
 
export default Header;