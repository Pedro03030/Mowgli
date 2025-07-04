// Variables globales para idioma y juego
let escondite = 0;
let puntajeBaloo = 0;
let idiomaJuego = "es";

// Funciones para cambiar idioma y mostrar secciones
function showEnglish() {
  idiomaJuego = "en";
  document.getElementById("english").style.display = "block";
  document.getElementById("spanish").style.display = "none";
  document.querySelector(".pdf-section").style.display = "none";
  document.querySelector(".audio-section").style.display = "block";
  actualizarTextoBaloo();
}

function showSpanish() {
  idiomaJuego = "es";
  document.getElementById("spanish").style.display = "block";
  document.getElementById("english").style.display = "none";
  document.querySelector(".pdf-section").style.display = "block";
  document.querySelector(".audio-section").style.display = "none";
  actualizarTextoBaloo();
}

function actualizarTextoBaloo() {
  document.getElementById("titulo-juego").textContent =
    idiomaJuego === "es" ? "🕵️‍♂️ Encuentra a Baloo" : "🕵️‍♂️ Find Baloo";
  document.getElementById("instruccion-juego").textContent =
    idiomaJuego === "es"
      ? "¿Dónde está Baloo escondido?"
      : "Where is Baloo hiding?";
  document.getElementById("puntaje-baloo").textContent =
    (idiomaJuego === "es" ? "Puntaje: " : "Score: ") + puntajeBaloo;
}

// Función para iniciar una nueva ronda
function nuevaRonda() {
  escondite = Math.floor(Math.random() * 3);
  document.getElementById("resultado-juego").textContent = "";
  document.querySelectorAll(".arbusto").forEach((el) => {
    el.classList.remove("revelado", "error");
    el.style.pointerEvents = "auto";
  });
}

// Función para elegir un arbusto
function elegir(indice) {
  const arbustos = document.querySelectorAll(".arbusto");

  if (indice === escondite) {
    arbustos[indice].classList.add("revelado");
    document.getElementById("resultado-juego").textContent =
      idiomaJuego === "es" ? "¡Encontraste a Baloo! 🐻" : "You found Baloo! 🐻";
    puntajeBaloo++;
  } else {
    arbustos[indice].classList.add("error");
    document.getElementById("resultado-juego").textContent =
      idiomaJuego === "es" ? "¡Oh no! Eso no era. 🐍" : "Oops! Wrong choice. 🐍";
  }

  document.getElementById("puntaje-baloo").textContent =
    (idiomaJuego === "es" ? "Puntaje: " : "Score: ") + puntajeBaloo;

  // Desactivar clics para no elegir más hasta nueva ronda
  arbustos.forEach((a) => (a.style.pointerEvents = "none"));
}

// Iniciar primera ronda automáticamente al cargar la página
window.onload = nuevaRonda;
