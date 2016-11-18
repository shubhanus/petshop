import {GET_PET_DESC} from '../constants/actionTypes';

export default function getPetDesc(petRef, key) {
    return (dispatch) => {
        debugger;
        petRef.ref('pets/' + key + '/description').on('value', (val) => {
            console.log(val.val());
        })
        // petRef.on("value", (snapshot) => {
        //     debugger;
        //     let data = {type: types.FETCH_PET_DATA_COMPLETE, payload: snapshot.val()};
        //     return dispatch(data);
        //     // this.setState({cats : snapshot.val()});
        // }, (errorObject) => {
        //     console.log("The read failed: " + errorObject.code);
        //     return dispatch({type: types.FETCH_PET_DATA_ERROR, payload: errorObject.code});
        // });
    };
}