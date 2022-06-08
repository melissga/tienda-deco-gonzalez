// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs, setDoc, Timestamp, addDoc,add} from 'firebase/firestore/lite';
import datos from './datos';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpS_8d3k8LaP4OMUjpxMu2i6d0BCeX3Hw",
  authDomain: "interiordesign-76392.firebaseapp.com",
  projectId: "interiordesign-76392",
  storageBucket: "interiordesign-76392.appspot.com",
  messagingSenderId: "1007188944375",
  appId: "1:1007188944375:web:138393505c62ebda6dfaf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;

//async/await --> promises
export async function getAllItems(){
    //obtenemos la referencia a la coleccion de items
    const miColec = collection (firestoreDB, 'deco');
    //obtenemos todos los items
    /*getDocs(miColec).then(result => console.log(result)) */

    const decoSnap = await getDocs(miColec);
    return decoSnap.docs.map( doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    });
}

//obtener todos los items de una categoria
export async function getItemsByCategory(categoryId){
  console.log("entre a la funcion");
  const miColec = collection(firestoreDB, 'deco' );
  const queryDeco = query(miColec, where("category", "==", categoryId));
  const decoSnap = await getDocs(queryDeco);
  return decoSnap.docs.map( doc => {
    return {
      ...doc.data(),
      id: doc.id
    }
  });
}

//obtener un solo item segun el ID para pasar a ItemDetail
 export async function getItem(id) {
   const miColec = collection(firestoreDB, 'deco');
   const decoRef = doc(miColec, id);
   const decoSnap = await getDoc(decoRef);
   
  return {...decoSnap.data(), id: decoSnap.id};

 }
 
 //descomentar para la carga de datos a Firebase
export async function dataToFirebase(){
  const PRODUCTS = datos;
  const miColec = collection(firestoreDB, 'products');

  PRODUCTS.forEach((item) => {
    const newDoc = doc(miColec);
    setDoc(newDoc, item).then(() => {
      console.log("Document written with id: ", newDoc.id) })
      .catch(err => {
        console.log("Error adding document: ", err);
      });
  });
} 

export async function createBuyOrder(orderData){
  const buyTimestamp = Timestamp.now();
  const orderWithDate = {...orderData, 
    date: buyTimestamp
  };
  const miColec = collection(firestoreDB, 'buyOrders');
  const orderDoc = await addDoc(miColec, orderWithDate);
  console.log("Orden lista con el ID:", orderDoc.id);
  alert("Su orden fue enviada. Código de compra: " + orderDoc.id);
}
 