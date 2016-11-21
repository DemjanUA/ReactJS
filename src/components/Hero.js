import React, { Component } from 'react';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {count : 0};
    }

    handleClick = () => {
        this.setState({ count : this.state.count + 1 })
    };

    render() {
        return (
            <div className="container">
                <div className="count">{ this.state.count }</div>
                <img src={ this.props.imageURL } onClick={ this.handleClick }/>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.subtitle }</p>
            </div>
        );
    }
}

export default Hero;