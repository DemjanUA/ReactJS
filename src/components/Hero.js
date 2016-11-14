import React from 'react';

let Hero = React.createClass({
    getInitialState : function() {
        return {
            count : 0
        };
    },

    handleClick : function() {
        this.setState({ count : this.state.count + 1 })
    },

    render : function() {
        return (
            <div className="container">
                <div className="count">{ this.state.count }</div>
                <img src={ this.props.imageURL } onClick={ this.handleClick }/>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.subtitle }</p>
            </div>
        );
    }
});

export default Hero;