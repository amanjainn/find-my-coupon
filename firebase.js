 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDqrT1fnU97jhUtTQUp4ODrjivhrbbr2LQ",
    authDomain: "find-my-coupon.firebaseapp.com",
    projectId: "find-my-coupon",
    storageBucket: "find-my-coupon.appspot.com",
    messagingSenderId: "1054798639604",
    appId: "1:1054798639604:web:6096f7f1dc4a4578ea09a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  chrome.runtime.onMessage.addListener((msg,sender,response)=>{
        if(msg.command==="fetch"){
            var domain=msg.data.domain;
            var enc_domain=btoa(domain);
            firebase.database().ref('/domain/'+enc_domain).once('value').then(function(snapshot){
                response({type:"result",status:"success",data:snapshot.val(),request:msg});
            })
        }
    return true;

  })