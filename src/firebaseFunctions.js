import { fbConfig, db } from "./fb";

export const registerUser = (userName, email, password) => {
  return fbConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userFb) => {
      userFb.user.updateProfile({
        displayName: userName,
      });
    });
};

export const loginUser = (email, password) => {
  return fbConfig.auth().signInWithEmailAndPassword(email, password);
};

export const logOutUser = () => fbConfig.auth().signOut();

export const createOrder = (tableNumber, userName, clientOrder) => {
  return db.collection("orders").add({
    table: tableNumber,
    client: userName,
    order: clientOrder,
  });
};
