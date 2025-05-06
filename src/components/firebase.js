import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCWYBnOkRfm593lzx7iaX-1uf63Ynr7GX4',
	authDomain: 'clearbreath-d55ed.firebaseapp.com',
	projectId: 'clearbreath-d55ed',
	storageBucket: 'clearbreath-d55ed.firebasestorage.app',
	messagingSenderId: '479263832761',
	appId: '1:479263832761:web:31cfae0bb4e4e61364b968',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
