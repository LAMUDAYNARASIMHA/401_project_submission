import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsFMCP0Hne62_fJ93xdbVdaiQ6-FJIM0U",
  authDomain: "group-af66d.firebaseapp.com",
  databaseURL: "https://group-af66d-default-rtdb.firebaseio.com",
  projectId: "group-af66d",
  storageBucket: "group-af66d.appspot.com",
  messagingSenderId: "930954816439",
  appId: "1:930954816439:web:472bc9d870ff0363295632",
  measurementId: "G-DHSHPQCLMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

document.getElementById('feedbackBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlayContent').classList.add('show');
});

document.getElementById('closeOverlayBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('overlayContent').classList.remove('show');
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('overlay')) {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('overlayContent').classList.remove('show');
    }
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a new feedback entry in the database
    const feedbackRef = ref(database, 'feedbacks/' + new Date().getTime());
    set(feedbackRef, {
        name: name,
        email: email,
        message: message
    }).then(() => {
        // Clear the form and hide the overlay
        document.getElementById('feedbackForm').reset();
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('overlayContent').classList.remove('show');
        alert('Thank you for your feedback!');
    }).catch((error) => {
        console.error('Error writing to Firebase Database', error);
        alert('There was an error submitting your feedback. Please try again.');
    });
});