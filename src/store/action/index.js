import Firebase from '../../config/firebase';
import firebase from 'firebase';

const setData = (data) => {
    return (dispatch) => {
        dispatch({ type: "Set_Data", data: data })
        console.log("runing===>", data)
    }
}

const facebookLogin = (data) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // The signed-in user info.
                var user = result.user;
                console.log("Firebase User", user)
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Firebase Error ", errorMessage);

            });
        console.log("Facebook Login===>", data)
    }
}

export { setData, facebookLogin }

