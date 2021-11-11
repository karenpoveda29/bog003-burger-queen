import { fbConfig } from "./fb"

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
  /* .then((userFb)=>{
    console.log('Sesión iniciada correctamente', userFb);
    window.location.pathname = "/home";
  }) */
}