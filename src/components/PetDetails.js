import React from "react";

export default class PerDetails extends React.Component {
    render() {
        return (
            <div className="pet_details">
                <div><label>Name: </label> <span>{this.props.pet.name}</span></div>
                <div><label>Type: </label> <span>{this.props.pet.type}</span></div>
                <div><label>Age: </label> <span>{this.props.pet.age}</span></div>
            </div>
        )
    }
}