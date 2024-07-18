import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { productos } from '../data/asyncMock'

const firebaseConfig = {
  apiKey: 'AIzaSyBglb4gpnrghz2EeVcBBpZh-lPf_qmmF8k',
  authDomain: 'coder-1c5e6.firebaseapp.com',
  projectId: 'coder-1c5e6',
  storageBucket: 'coder-1c5e6.appspot.com',
  messagingSenderId: '388756133826',
  appId: '1:388756133826:web:89368fbc32104280baa85b'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

/*
productos.forEach((prod) => {
  addDoc(collection(db, 'productos'), prod)
    .then((data) => console.log(`El producto ${data.id} se subió correctamente`))
    .catch((error) => console.log(error))
})
*/
