import { fbConfig, db } from "./fb"


export const registerUser = (userName, email, password) => {
  fbConfig.auth()
  .createUserWithEmailAndPassword(email,password)
    .then((userFb)=>{
      userFb.user.updateProfile({
        displayName: userName,
      });         
    })
};

export const loginUser = (email, password) => {
  fbConfig.auth()
  .signInWithEmailAndPassword(email, password)
};

export const logOutUser = () => fbConfig.auth().signOut();

export const createOrder = (userName, tableNumber) => {
  db.collection('orders').add({
    client: userName,
    table: tableNumber,
    createdAt: fbConfig.firestore.FieldValue.serverTimestamp(),
  });
};


