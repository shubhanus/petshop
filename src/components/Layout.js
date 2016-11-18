import React from "react";
import CategoryWrapper from "./CategoryWrapper";
import PetBref from './PetBref';

export default class Layout extends React.Component {
    // static contextTypes = {
    //     router:React.PropsType.object
    // };
    constructor() {
        super();
        // debugger;
    }
    render() {
        return ( 
            <div>
                <CategoryWrapper petRef={this.petRef} />
                <PetBref bref=""/>
            </div>
        );
    }
}