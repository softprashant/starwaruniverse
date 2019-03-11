declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { Planet } from "./dist/components/planet/planet";
import { PlanetService } from "./dist/services/planetService/planetService";
import { PlanetDetailModel } from "./dist/components/planet/PlanetDetailModel";

const planetService = new PlanetService();

export class StarWarUniverseApp extends React.Component {
    private _planets: Planet[] = [];
    constructor() {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            planets: [],
            showPlanetDetail: false
        };
        this.intialize();
    }



    intialize() {
        planetService.getPlanets((planets: Planet[]) => {
            this._planets = planets;
            this.setState({
                isLoaded: true,
                planets: planets
            });
        });
    }

    showPlanetDetails(planet: Planet) {
        ReactDOM.render(<PlanetDetailModel />, document.getElementById('detailmodel'))
    }
    render() {
        const { error, isLoaded, planets } = this.state;
        if (error) {
            return <li>Error: {error.message}</li>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                planets.map(planet => (
                    <div key={planet.Name} className="col-sm-6 col-md-4 col-lg-3 mt-4">
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/200/150/?random"></img>
                            <div className="card-block text-center">
                                <h4 className="card-title">{planet.Name}</h4>
                            </div>
                            <div className="card-footer">
                                <span><i className=""></i><PlanetDetailModel planet={planet} /></span>
                            </div>
                        </div>
                    </div>
                ))
            );
        }
    }
}

ReactDOM.render(<StarWarUniverseApp />, document.getElementById('starwarroot'));

