import React from "react";

import Category from "./Category";
import AddInventory from "./AddInventory";
import getPetData from "../actions/PetDataActions";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as firebase from "firebase";
import { Config } from "../constants/FirebaseConfig";

import _ from "lodash";

firebase.initializeApp(Config);

export class CategoryWrapper extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.petRef=firebase.database().ref("/pets");
        this.handelClick = this.handelClick.bind(this);
    }
    componentWillMount(){
        this.state = {
            cats: this.props.data
        };
    }
    componentDidMount() {
        this.props.actions(this.petRef);
    }
    handelClick(cat) {
        let key = 'cat-' + cat.name + '-' + cat.age;
        this.petRef.child(key).set(cat);
    }
    render() {
        let cat = [];
        if (this.props.cats.fatched && this.props.cats.data) {
            _.each(this.props.cats.data, (val, key) => {
                cat.push(
                    <Category pet={val} key={key} elemKey={key} />
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

function mapStateToProps(state) {
  return {cats: state.PetDataReducers};
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(getPetData, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper);