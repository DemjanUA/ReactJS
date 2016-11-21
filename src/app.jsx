import React from 'react';
import ReactDOM from 'react-dom';
import HeroList from './components/HeroList';

let App = () => { 
    return (
        <main>
            <aside>
                <h2>I <i className="material-icons">favorite_border</i> do It</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </aside>
            <div className="workZone">
                <header>
                    <h3>Frameworks</h3>
                </header>
                <HeroList />
            </div>
        </main>
    );
};

ReactDOM.render(
    <App />
    , document.getElementById('root')
);