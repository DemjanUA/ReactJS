"use strict";

var _storage = require("./storage");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_storage2.default);
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

var HeroList = React.createClass({
    displayName: "HeroList",

    getInitialState: function getInitialState() {
        return {
            list: _storage2.default
        };
    },

    componentDidMount: function componentDidMount() {
        console.log(this.state.list);
    },

    handleSearch: function handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();
        var currentState = _storage2.default.filter(function (element) {
            var searchValue = element.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({ list: currentState });
    },

    render: function render() {
        return React.createElement(
            "div",
            { className: "clearfix" },
            React.createElement(
                "p",
                { className: "search" },
                React.createElement(
                    "label",
                    null,
                    React.createElement("input", { type: "text", onChange: this.handleSearch })
                )
            ),
            this.state.list.map(function (element) {
                return React.createElement(Hero, { key: element.id,
                    imageURL: element.imageURL,
                    title: element.title,
                    subtitle: element.subtitle
                });
            })
        );
    }
});

ReactDOM.render(React.createElement(HeroList, null), document.getElementById('root'));
