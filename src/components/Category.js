import React from "react";
import PetDetails from "./PetDetails"

export default class Category extends React.Component {
    constructor() {
        super();
        this.handelClick = this.handelClick.bind(this);
    }
    handelClick() {
        console.log(this);
    }
    render() {
        return (
            <div className="category" onClick={this.handelClick} >
                <img src={this.props.pet.img} alt="pet_img"/>
                <PetDetails pet={this.props.pet} />
            </div>
        );
    }
}