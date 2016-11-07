/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _storage = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var storage = [{
	    'id': 1,
	    'imageURL': 'https://facebook.github.io/react/img/logo.svg',
	    'title': 'React',
	    'subtitle': 'Библиотека для создания пользовательских интерфейсов'
	}, {
	    'id': 2,
	    'imageURL': 'https://angular.io/resources/images/logos/angular2/angular.svg',
	    'title': 'Angular 2',
	    'subtitle': 'Один фреймворк'
	}, {
	    'id': 3,
	    'imageURL': 'https://worldvectorlogo.com/logos/codeigniter.svg',
	    'title': 'CodeIgniter',
	    'subtitle': 'Powerful PHP framework'
	}, {
	    'id': 4,
	    'imageURL': 'https://worldvectorlogo.com/logos/laravel.svg',
	    'title': 'Laravel',
	    'subtitle': 'The PHP Framework For Web Artisans'
	}, {
	    'id': 5,
	    'imageURL': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg',
	    'title': 'Bootstrap 4',
	    'subtitle': 'HTML, CSS, and JS framework'
	}, {
	    'id': 6,
	    'imageURL': 'http://sass-scss.ru/assets/img/logos/logo.svg',
	    'title': '	Sass',
	    'subtitle': 'CSS extension language'
	}];

	module.exports = storage;


/***/ }
/******/ ]);