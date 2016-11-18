import React from "react";
import PetDetails from "./PetDetails";
import PetDesctiption from "../actions/PetDescription";

export default class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handelClick = this.handelClick.bind(this);
        this.props = {
            bref: ''
        }; 
    }
    handelClick() {
        
        // debugger;
        // this.props.catClick(this.props.elemKey);
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
