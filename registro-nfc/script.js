
import {
    doc,
    getDoc,
    updateDoc,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA813oe8QUoYeUOvyqe_fnHSMvOJhpWgW0",
  authDomain: "testenfc-99647.firebaseapp.com",
  projectId: "testenfc-99647",
  storageBucket: "testenfc-99647.firebasestorage.app",
  messagingSenderId: "504414795881",
  appId: "1:504414795881:web:01e1ffc3f2fead27f80af8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const nomeEl = document.getElementById("nome");
const mensagemEl = document.getElementById("mensagem");

const id = new URLSearchParams(window.location.search).get("id");

async function registrarPonto() {

    if (!id) {
        nomeEl.textContent = "Funcionário não encontrado";
        return;
    }

    const funcionarioRef = doc(db, "funcionarios", id);
    const funcionarioSnap = await getDoc(funcionarioRef);

    if (!funcionarioSnap.exists()) {
        nomeEl.textContent = "Funcionário inexistente";
        return;
    }

    const funcionario = funcionarioSnap.data();

    nomeEl.textContent = funcionario.nome;

    const novaAcao =
        funcionario.ultimaAcao === "entrada"
            ? "saida"
            : "entrada";

    const agora = new Date();

    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR");

    await addDoc(
        collection(db, "funcionarios", id, "registros"),
        {
            data,
            hora,
            tipo: novaAcao
        }
    );

    await updateDoc(funcionarioRef, {
        ultimaAcao: novaAcao
    });

    mensagemEl.textContent =
        `${novaAcao.toUpperCase()} registrada às ${hora} ✔`;
}

registrarPonto();