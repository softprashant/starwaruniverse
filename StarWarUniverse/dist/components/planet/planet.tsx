declare var require: any


var React = require('react');
var ReactDOM = require('react-dom');


export class Planet extends React.Component {
    private _name: string = "";
    get Name(): string {
        return this._name;
    }
    set Name(name: string) {
        this._name = name;
    }


    private _climate: string = "";

    get Climate(): string {
        return this._climate;
    }
    set Climate(climate: string) {
        this._climate = climate;
    }


    private _diameter: string = "";

    get Diameter(): string {
        return this._diameter;
    }
    set Diameter(diameter: string) {
        this._diameter = diameter;
    }


    private _population: number;

    get Population(): number {
        return this._population;
    }
    set Population(population: number) {
        this._population = population;
    }


    private _terrain: string = "";

    get Terrain(): string {
        return this._terrain;
    }
    set Terrain(terrain: string) {
        this._terrain = terrain;
    }

    constructor() {
        super()
    }
}