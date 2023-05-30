// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCj8l11Ua9sbgmBY6KeFc8VBEb2uJDnUj4",
  authDomain: "test-7be77.firebaseapp.com",
  projectId: "test-7be77",
  storageBucket: "test-7be77.appspot.com",
  messagingSenderId: "457792641195",
  appId: "1:457792641195:web:d558ed35c45b4501c33fee"
};

firebase.initializeApp(firebaseConfig);

// Sign up with email and password
function signUp(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Sign up successful, you can handle the newly created user here
      var user = userCredential.user;
      console.log('Sign up successful!', user);
    })
    .catch(function (error) {
      // Handle sign up errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Sign up error:', errorCode, errorMessage);
    });
}

// Sign in with email and password
function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Sign in successful, you can handle the signed-in user here
      var user = userCredential.user;
      console.log('Sign in successful!', user);
    })
    .catch(function (error) {
      // Handle sign in errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Sign in error:', errorCode, errorMessage);
    });
}

// Handle form submission for sign up
document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;
  signUp(email, password);
  // Clear the form after submission
  document.getElementById('signup-form').reset();
});

// Handle form submission for sign in
document.getElementById('signin-form').addEventListener('submit', function (event) {
  event.preventDefault();
  var email = document.getElementById('signin-email').value;
  var password = document.getElementById('signin-password').value;
  signIn(email, password);
  // Clear the form after submission
  document.getElementById('signin-form').reset();
});


// Sign out
function signOut() {
  firebase.auth().signOut()
    .then(function () {
      // Sign out successful
      console.log('Sign out successful!');
    })
    .catch(function (error) {
      // An error happened
      console.error('Sign out error:', error);
    });
}


// Add event listener to the sign-out button
document.getElementById('signout-button').addEventListener('click', function () {
  signOut();
});

// Listen for changes in the user's sign-in state
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in
    document.getElementById('signout-button').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signin-form').style.display = 'none';
  } else {
    // User is signed out
    document.getElementById('signout-button').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('signin-form').style.display = 'block';
  }
});