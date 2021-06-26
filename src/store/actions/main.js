import * as actionTypes from "./actionTypes";
import firebase from "../../apis/firebase";
import stringToDateObj from "../../utils/stringToDateObj";

const postDataStart = () => {
  return {
    type: actionTypes.POST_DATA_START,
  };
};

// const postDataSuccess = () => {
//   return {
//     type: actionTypes.POST_DATA_SUCCESS,
//   };
// };

const postDataFail = (error) => {
  return {
    type: actionTypes.POST_DATA_FAIL,
    error,
  };
};

export const postData = (createdObj) => {
  return async (dispatch) => {
    try {
      dispatch(postDataStart());
      const { year, month, day } = stringToDateObj(createdObj.date);
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const url = `/${year}/${month}/${day}/${userId}.json`;

      const response = await firebase.post(url, createdObj, {
        params: {
          auth: token,
        },
      });
      console.log(response);
    } catch (e) {
      dispatch(postDataFail(e));
    }
  };
};
