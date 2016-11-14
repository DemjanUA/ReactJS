import React from 'react';
import Hero from './Hero';
import storage from '../stores/storage';

let HeroList = React.createClass({
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

export default HeroList;