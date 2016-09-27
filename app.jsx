const storge = [
    {
        'imageURL' : 'https://facebook.github.io/react/img/logo.svg',
        'title' : 'React',
        'subtitle' : 'Библиотека для создания пользовательских интерфейсов'
     },
    {
        'imageURL' : 'https://angular.io/resources/images/logos/angular2/angular.svg',
        'title' : 'Angular 2',
        'subtitle' : 'Один фреймворк'
     },
    {
        'imageURL' : 'https://worldvectorlogo.com/logos/codeigniter.svg',
        'title' : 'CodeIgniter',
        'subtitle' : 'Powerful PHP framework'
     },
    {
        'imageURL' : 'https://worldvectorlogo.com/logos/laravel.svg',
        'title' : 'Laravel',
        'subtitle' : 'The PHP Framework For Web Artisans'
     },
    {
        'imageURL' : 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg',
        'title' : 'Bootstrap 4',
        'subtitle' : 'HTML, CSS, and JS framework'
     },
    {
        'imageURL' : 'http://sass-scss.ru/assets/img/logos/logo.svg',
        'title' : '	Sass',
        'subtitle' : 'CSS extension language'
     }
];
//console.log(storge);
var Hero = React.createClass({
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

var HeroList = React.createClass({
    render : function() {
        return (
            <div className="clearfix">
                {
                    storge.map(function(element) {
                        return (<Hero 
                            imageURL={ element.imageURL }
                            title={ element.title }
                            subtitle={ element.subtitle }
                        />)
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <HeroList />
    , document.getElementById('root')
);
