import React from "react";
import * as firebase from "firebase";
import { Link } from "evergreen-ui";

var firebaseConfig = {
  apiKey: "AIzaSyA4muyCH1SqNLZxQssRVCyUurL1xwO4HgA",
  authDomain: "website-27f8b.firebaseapp.com",
  databaseURL: "https://website-27f8b.firebaseio.com",
  projectId: "website-27f8b",
  storageBucket: "website-27f8b.appspot.com",
  messagingSenderId: "552039785351",
  appId: "1:552039785351:web:f9e6acc8963a5fa97ba922",
  measurementId: "G-ZHX30GKRGT"
};

export default function GetLink(props) {

  const getLink = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    var storage = firebase.storage();
    var storageRef = storage.ref();
    storageRef
      .child(props.name)
      .getDownloadURL()
      .then(function(url) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function(event) {
        //   var blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        window.open(url);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
    <Link href="#" onClick={getLink} color="blue">{props.words}</Link>
    </div>
  );
}
