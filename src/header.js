import React ,{ Component } from 'react';

class Header extends Component{
    render(){
        return(
            <header>
                Header
                <p>{this.props.count}</p>
            </header>
        )
    }
}

export default Header;

