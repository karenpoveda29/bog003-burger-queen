import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


export const fbConfig = firebase.initializeApp({
    "projectId": "bq10-burger-queen",
    "appId": "1:234202997381:web:7ee31649837f446749bfec",
    "storageBucket": "bq10-burger-queen.appspot.com",
    "locationId": "southamerica-east1",
    "apiKey": "AIzaSyDnCHpHBppz-DTRlg1Ok_azolSOSlqocW4",
    "authDomain": "bq10-burger-queen.firebaseapp.com",
    "messagingSenderId": "234202997381"
});

export const db = fbConfig.firestore()

