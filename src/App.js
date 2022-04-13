import logo from './logo.svg';
import './App.css';

import * as api from './api.js';


function App() {
    return (
        <div className="App">
            <div className="header-grid">
                <img className="grid-item" src={require('./img/pokemon.png')}></img>
                <h1 className="grid-item" >Pokemon List</h1>
            </div>

            <div className="list">
                <api.PokeList></api.PokeList>
            </div>
        </div>
    );
}

export default App;