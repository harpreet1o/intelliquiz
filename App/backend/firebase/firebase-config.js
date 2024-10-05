import admin from "firebase-admin";
import firebaseKey from "./firebaseKey.json" assert { type: "json" };

admin.initializeApp({
    credential:admin.credential.cert(firebaseKey)
})

export default admin;