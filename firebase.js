import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, doc, updateDoc, increment, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyDEN1XSKmtIi-DlLihv65GOdNa6v0oMcfw",authDomain:"construindo-o-templo.firebaseapp.com",projectId:"construindo-o-templo",storageBucket:"construindo-o-templo.firebasestorage.app",messagingSenderId:"238024057501",appId:"1:238024057501:web:0bf30048340f8e880daa74"};
const app=initializeApp(firebaseConfig);
export const db=getFirestore(app);
export {doc,updateDoc,increment,onSnapshot};
import {
  db,
  doc,
  onSnapshot,
  updateDoc
} from './firebase.js';

document
.getElementById("resetBtn")
.addEventListener("click", async () => {

  const confirmar = confirm(
    "Deseja realmente reiniciar a atividade?"
  );

  if(!confirmar) return;

  await updateDoc(
    doc(db,"atividade","progresso"),
    {
      respostas: 0,
      pontos: 0,
      participantes: 0,
      quadradosRevelados: 0
    }
  );

});
