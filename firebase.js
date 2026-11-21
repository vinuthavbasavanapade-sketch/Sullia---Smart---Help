
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD62BOt-o7e2BCWxqElNqihpLc5JIbNoQ",
    authDomain: "sullia-smart-help.firebaseapp.com",
    projectId: "sullia-smart-help",
    storageBucket: "sullia-smart-help.firebasestorage.app",
    messagingSenderId: "205441340400",
    appId: "1:205441340400:web:a17ec35634000810dd0335"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
