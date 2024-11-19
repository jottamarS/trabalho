import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6y1HCNL5EBiJMzNn7nsvtF_I7zX8llf4",
  authDomain: "trabalho-2f48c.firebaseapp.com",
  projectId: "trabalho-2f48c",
  storageBucket: "trabalho-2f48c.firebasestorage.app",
  messagingSenderId: "748005232585",
  appId: "1:748005232585:web:9ec55881fefe63e87f2218",
  measurementId: "G-7JNCYF52TJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
