import { Alert } from "react-native";

import firebase from "../core/config";
import "@firebase/auth";
import "@firebase/firestore";

export const logoutUser = () => {
  firebase.auth().signOut();
  // navigation.navigate("LoginActivity");
};


export const signInUser = async ({ email, password }) => {
      try {
        let response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          //Alert.alert("Logged In Success ✅")
          console.log(response);
          // navigation.replace("HomeActivity");
        }
      } catch (e) {
        Alert.alert("Error", e.message);
        console.error(e.message);
      }
    };

// export const registerUser = async ({ email, password }) => {
//     //await firebase.auth().signInWithEmailAndPassword(email, password)
    
//   await firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((response) => {
//       //const { navigation } = this.props;
//       user_uid = response.user._user.uid;
//       firebase
//         .firestore()
//         .collection("users")
//         .doc(user_uid)
//         .get()
//         .then(function (user) {
//           if (user.exists) {
//             AsyncStorage.setItem("@loggedInUserID:id", user_uid);
//             AsyncStorage.setItem("@loggedInUserID:key", email);
//             AsyncStorage.setItem("@loggedInUserID:password", password);
//             //navigation.dispatch({ type: "Login", user: user });
//           } else {
//             alert("User does not exist. Please try again.");
//           }
//         })
//         .catch(function (error) {
//           const { code, message } = error;
//           alert(message);
//         });
//     })
//     .catch((error) => {
//       const { code, message } = error;
//         switch (code) {
//           case "auth/email-already-in-use":
//             return {
//               error: "E-mail already in use.",
//             };
//           case "auth/invalid-email":
//             return {
//               error: "Invalid e-mail address format.",
//             };
//           case "auth/weak-password":
//             return {
//               error: "Password is too weak.",
//             };
//           case "auth/too-many-requests":
//             return {
//               error: "Too many request. Try again in a minute.",
//             };
//         }
//     });
// };

export const registerUser = async ({ email, password, name }) => {


     try {
       let response = await firebase
         .auth()
         .createUserWithEmailAndPassword(email, password);
       if (response && response.user) {
         Alert.alert("Success ✅", response.user);
         console.log(response.user);
         //navigation.navigate("LoginActivity")
       }
     } catch (e) {
       Alert.alert("Error", e.message);
       console.error(e.message);
     }
   };

   //sva user data to databse
     export const createUserData = ({ email, password, name }) => {
              const dbRef = firebase.firestore().collection("Users").doc(email);

              dbRef
                .set({
                  email: email,
                  password: password,
                  name: name,
                  dateJoined: new Date(),
                })
                .then((res) => {})
                .catch((err) => {
                  console.error("Error found: ", err);
                });
            };

    export const __resetPassword = async (email) => {
      try {
        let response = await firebase
          .auth()
          .sendPasswordResetEmail(email);
        if (response) {
          Alert.alert("Passsword Reset Link Sent ✅. Please check your email");
          //console.log(response);
          //navigation.replace("LoginActivity")
        }
      } catch (e) {
        Alert.alert("Error", e.message);
        console.error(e.message);
      }
    };
