// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsQ2zOEYP1i-VG1_X5neaXRGorSzBG79g",
  authDomain: "cms-try-a3700.firebaseapp.com",
  projectId: "cms-try-a3700",
  storageBucket: "cms-try-a3700.appspot.com",
  messagingSenderId: "383589806213",
  appId: "1:383589806213:web:70f8431ebf0b56bca879ec",
  measurementId: "G-80L1PMJEMM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

// const messaging = app.messaging();

const publicKey =
  "BKMCXdXA2-5-BAAx0bEOtiinGw2oBxiCheDERkXN11ZcEfcT1U_SK49txN-gx3H9fS9jjtRAVdSLIjdpGL5OJ8o";

export const getFCMToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await getToken(messaging).then((data) => {
      console.log(data);
      return data;
      // setTokenFound(true);
    });
    console.log(currentToken);
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage((payload) => {
      resolve(payload);
    });
  });

export default app;
