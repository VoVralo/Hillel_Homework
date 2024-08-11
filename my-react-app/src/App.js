import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">SWAPI Interface</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Planets</h5>
              <p className="card-text">Display a list of planets here.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">People</h5>
              <p className="card-text">Display a list of people here.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Starships</h5>
              <p className="card-text">Display a list of starships here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
