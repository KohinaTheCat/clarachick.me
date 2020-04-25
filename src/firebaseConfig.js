  // Set the configuration for your app
  // TODO: Replace with your app's config object
  const firebaseConfig = {
    apiKey: "AIzaSyA4muyCH1SqNLZxQssRVCyUurL1xwO4HgA",
    authDomain: "website-27f8b.firebaseapp.com",
    databaseURL: "https://website-27f8b.firebaseio.com",
    projectId: "website-27f8b",
    storageBucket: "website-27f8b.appspot.com",
    messagingSenderId: "552039785351",
    appId: "1:552039785351:web:f9e6acc8963a5fa97ba922",
    measurementId: "G-ZHX30GKRGT"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  export default firebaseConfig;
