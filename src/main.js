import React ,{ Component } from 'react';

class Main extends Component{
    render(){
        return(
            <div className="main">
                {
                    <button onClick={this.props.fun}>Click Here</button>
                }
            </div>
        )
    }
}

export default Main;

