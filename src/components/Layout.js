import React from "react";
import CategoryWrapper from "./CategoryWrapper";
import PetBref from "./PetBref";

import getPetDesc from '../actions/PetDescription';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';

export class Layout extends React.Component {    
    render() {
        return ( 
            <div>
                <CategoryWrapper petRef={this.petRef} />
                <PetBref desc={this.props.desc.data}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {desc: state.PetDataReducers};
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(getPetDesc, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper);