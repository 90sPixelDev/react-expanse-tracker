import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
	projectId: 'min-expense',
	storageBucket: process.env.REACT_APP_FIRBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIRBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIRBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIRBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
