import React from "react";
import Category from "./Category";
import AddInventory from "./AddInventory";
import * as firebase from "firebase";
import { Config } from "../constants/FirebaseConfig";
import _ from "lodash";

firebase.initializeApp(Config);

export default class CategoryWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            cats: ''
        }
        this.petRef=firebase.database().ref("/pets");
        this.handelClick = this.handelClick.bind(this);
    }
    componentWillMount(){
        this.state = {
            cats: this.props.data
        };
        this.petRef.on("value", (snapshot) => {
            this.setState({cats : snapshot.val()});
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    handelClick(cat) {
        let key = 'cat-' + cat.name + '-' + cat.age;
        this.petRef.child(key).set(cat);
    }
    render() {
        let cat = [];
        if (this.state.cats) {
            _.each(this.state.cats, function(val, key) {
                cat.push(
                    <Category pet={val} key={key} />
                );
            });
        }
        return (
            <div className="category_wrapper">
                {cat}
                <AddInventory cat={this.state.cat} onUserClick={this.handelClick}/>
            </div>
        );
    }
}