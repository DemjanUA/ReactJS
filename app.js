'use strict';

var storge = [{
    'imageURL': 'https://facebook.github.io/react/img/logo.svg',
    'title': 'React',
    'subtitle': 'Библиотека для создания пользовательских интерфейсов'
}, {
    'imageURL': 'https://angular.io/resources/images/logos/angular2/angular.svg',
    'title': 'Angular 2',
    'subtitle': 'Один фреймворк'
}, {
    'imageURL': 'https://worldvectorlogo.com/logos/codeigniter.svg',
    'title': 'CodeIgniter',
    'subtitle': 'Powerful PHP framework'
}, {
    'imageURL': 'https://worldvectorlogo.com/logos/laravel.svg',
    'title': 'Laravel',
    'subtitle': 'The PHP Framework For Web Artisans'
}, {
    'imageURL': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg',
    'title': 'Bootstrap 4',
    'subtitle': 'HTML, CSS, and JS framework'
}, {
    'imageURL': 'http://sass-scss.ru/assets/img/logos/logo.svg',
    'title': '	Sass',
    'subtitle': 'CSS extension language'
}];
//console.log(storge);
var Hero = React.createClass({
    displayName: 'Hero',

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
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'count' },
                this.state.count
            ),
            React.createElement('img', { src: this.props.imageURL, onClick: this.handleClick }),
            React.createElement(
                'h1',
                null,
                this.props.title
            ),
            React.createElement(
                'p',
                null,
                this.props.subtitle
            )
        );
    }
});

var HeroList = React.createClass({
    displayName: 'HeroList',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'clearfix' },
            storge.map(function (element) {
                return React.createElement(Hero, {
                    imageURL: element.imageURL,
                    title: element.title,
                    subtitle: element.subtitle
                });
            })
        );
    }
});

ReactDOM.render(React.createElement(HeroList, null), document.getElementById('root'));
