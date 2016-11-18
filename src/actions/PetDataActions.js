import * as types from "../constants/actionTypes";

export default function getPetData(petRef) {
    return (dispatch) => {
        petRef.on("value", (snapshot) => {
            let data = {type: types.FETCH_PET_DATA_COMPLETE, payload: snapshot.val()};
            return dispatch(data);
            // this.setState({cats : snapshot.val()});
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
            return dispatch({type: types.FETCH_PET_DATA_ERROR, payload: errorObject.code});
        });
    };
}