import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyASxQNeE_AWk0oKJljE6PVB0unid6tp9zA",
  authDomain: "twitter-clone-bf36d.firebaseapp.com",
  databaseURL: "https://twitter-clone-bf36d.firebaseio.com",
  projectId: "twitter-clone-bf36d",
  storageBucket: "twitter-clone-bf36d.appspot.com",
  messagingSenderId: "521099483393",
  appId: "1:521099483393:web:0c430c74a6084aaf72a300",
  measurementId: "G-QDHLCTP1RQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
