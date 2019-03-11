declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import $ from 'jquery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Planet } from './planet';

export class PlanetDetailModel extends React.Component {
    Planet: Planet;
    constructor(props) {
        super(props);
        this.Planet = props.planet;
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <div className="text-center"> <Button color="info" className="btn-mini" onClick={this.toggle}>Show Details</Button></div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.Planet.Name}</ModalHeader>
                    <ModalBody>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Climate</th>
                                    <th scope="col">Terrain</th>
                                    <th scope="col">Diameter</th>
                                    <th scope="col">Population</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.Planet.Climate}</td>
                                    <td>{this.Planet.Terrain}</td>
                                    <td>{this.Planet.Diameter}</td>
                                    <td>{this.Planet.Population}</td>
                                </tr>
                            </tbody>
                        </table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}