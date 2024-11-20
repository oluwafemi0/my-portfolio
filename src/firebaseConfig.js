import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCp_GHx4r8tPKyRTtvp5hSp8lmglSq-wXQ",
    authDomain: "my-port-36798.firebaseapp.com",
    projectId: "my-port-36798",
    storageBucket: "my-port-36798.firebasestorage.app",
    messagingSenderId: "97956324270",
    appId: "1:97956324270:web:1c9dbd41a3e274ffcbde3f",
    measurementId: "G-Y6VTF6PK81"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  
  export const saveHighScore = async (username, score) => {
    try {
      await addDoc(collection(db, 'highScores'), {
        username: username,
        score: score,
        timestamp: new Date()
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  
  export const fetchHighScores = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'highScores'));
      let scores = [];
      querySnapshot.forEach((doc) => {
        scores.push(doc.data());
      });
      return scores.sort((a, b) => b.score - a.score);
    } catch (e) {
      console.error("Error getting documents: ", e);
      return [];
    }
  };