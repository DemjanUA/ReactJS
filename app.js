"use strict";

var Hero = React.createClass({
    displayName: "Hero",

    getInitialState: function getInitialState() {
        return {
            count: 0
        };
    },

    handleClick: function handleClick() {
        this.setState({ count: this.state.count + 1 });
    },

    render: function render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "count" },
                this.state.count
            ),
            React.createElement("img", { src: this.props.imageURL, onClick: this.handleClick }),
            React.createElement(
                "h1",
                null,
                this.props.title
            ),
            React.createElement(
                "p",
                null,
                this.props.subtitle
            )
        );
    }
});

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Hero, {
        imageURL: "https://facebook.github.io/react/img/logo.svg",
        title: "React",
        subtitle: "Библиотека для создания пользовательских интерфейсов"
    }),
    React.createElement(Hero, {
        imageURL: "https://angular.io/resources/images/logos/angular2/angular.svg",
        title: "Angular 2",
        subtitle: "Один фреймворк"
    })
), document.getElementById('root'));
