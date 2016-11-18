import React from "react";

export default class PetBref extends React.Component {
    render() {
        let bref;
        if(this.props.desc) {
            bref = this.props.desc;
        }
        return (
            <div className="pet_bref">
                <p>{bref}</p>
            </div>
        );
    }
}