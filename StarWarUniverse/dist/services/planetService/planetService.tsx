declare var require: any
var React = require('react');
var ReactDOM = require('react-dom');


import axios from 'axios';
import { Planet } from "../../components/planet/planet";

export class PlanetService extends React.Component {
    private _planets: Planet[] = [];
    getPlanets(cb: (planets: Planet[]) => any) {
        axios.get('https://swapi.co/api/planets/')
            .then(response => {
                response.data.results.map((data, index) => {                  
                    let planet = new Planet();
                    planet.Name = data.name;
                    planet.Climate = data.climate;
                    planet.Terrain = data.terrain;
                    planet.Diameter = data.diameter;
                    planet.Population = data.population;                    
                    this._planets.push(planet);
                });
                return cb(this._planets);
            });
    }
}