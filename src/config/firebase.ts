// import serviceAccount from "../videocoro-d3cc4-firebase-adminsdk-z3ill-d66b710cc8.json";
import admin from "firebase-admin"
import path from "path";
var serviceAccountPath = path.resolve(__dirname,"../serviceAccountKey.local.json");

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
    databaseURL: "https://videocoro-d3cc4.firebaseio.com"
});
export default firebase;