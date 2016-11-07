import storage from './storage';

console.log(storage);
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
    getInitialState : function() {
        return {
            list : storage
        };
    },

    componentDidMount : function() {
        console.log(this.state.list);
    },

    handleSearch : function(event) {
        let searchQuery = event.target.value.toLowerCase();
        var currentState = storage.filter(function(element){
            let searchValue = element.title.toLowerCase();  
            return searchValue.indexOf(searchQuery) !== -1 ;
        });
        this.setState({ list : currentState });
    },

    render : function() {
        return (
            <div className="clearfix">
                <p className="search">
                    <label>
                        <input type="text" onChange={ this.handleSearch } />
                    </label>
                </p>
                {
                    this.state.list.map(function(element) {
                        return (<Hero key={ element.id }
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