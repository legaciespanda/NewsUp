import { Alert } from "react-native";

import firebase from "firebase/app";
import "firebase/auth";

export const logoutUser = () => {
  firebase.auth().signOut();
};

export const signInUser = async ({ name, email, password }) => {


      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {})
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            Alert.alert("Weak Password!");
          } else {
            Alert.alert(errorMessage);
          }
        });
  
  // try {
  //   await firebase.auth().createUserWithEmailAndPassword(email, password);
  //   firebase.auth().currentUser.updateProfile({
  //     displayName: name
  //   });

  //   return {};
  // } catch (error) {
   // Alert.alert(error);
    // switch (error.code) {
    //   case "auth/email-already-in-use":
    //     return {
    //       error: "E-mail already in use."
    //     };
    //   case "auth/invalid-email":
    //     return {
    //       error: "Invalid e-mail address format."
    //     };
    //   case "auth/weak-password":
    //     return {
    //       error: "Password is too weak."
    //     };
    //   case "auth/too-many-requests":
    //     return {
    //       error: "Too many request. Try again in a minute."
    //     };
    // }
  //}
};

export const loginUser = async ({ email, password }) => {
    //await firebase.auth().signInWithEmailAndPassword(email, password)
    
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      //const { navigation } = this.props;
      user_uid = response.user._user.uid;
      firebase
        .firestore()
        .collection("users")
        .doc(user_uid)
        .get()
        .then(function (user) {
          if (user.exists) {
            AsyncStorage.setItem("@loggedInUserID:id", user_uid);
            AsyncStorage.setItem("@loggedInUserID:key", email);
            AsyncStorage.setItem("@loggedInUserID:password", password);
            //navigation.dispatch({ type: "Login", user: user });
          } else {
            alert("User does not exist. Please try again.");
          }
        })
        .catch(function (error) {
          const { code, message } = error;
          alert(message);
        });
    })
    .catch((error) => {
      const { code, message } = error;
        switch (code) {
          case "auth/email-already-in-use":
            return {
              error: "E-mail already in use.",
            };
          case "auth/invalid-email":
            return {
              error: "Invalid e-mail address format.",
            };
          case "auth/weak-password":
            return {
              error: "Password is too weak.",
            };
          case "auth/too-many-requests":
            return {
              error: "Too many request. Try again in a minute.",
            };
        }
    });
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format."
        };
      case "auth/user-not-found":
        return {
          error: "User with this email does not exist."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
    }
  }
};
