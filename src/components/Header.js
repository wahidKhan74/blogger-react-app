import React from "react";

class Header extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { message:'The New free blogs  here !'};
        // Binding this keyword 
        this.update = this.update.bind(this);
    }

    update() {
        // Changing state 
        this.setState(
            { message:'The New paid blogs  here !'}
        )
    }
    render() {
        return (
            <div>
                <h2>{this.props.appname}</h2>
                <p className="alert alert-success"> {this.state.message} </p>
                <button className="btn btn-primary" onClick={this.update}>
                    Update state
                </button>
            </div>
        )
    }
}

export default Header;