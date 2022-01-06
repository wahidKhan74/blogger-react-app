import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h2>{this.props.appname}</h2>
            </div>
        )
    }
}

export default Header;