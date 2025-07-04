let escondite = 0;
let puntajeBaloo = 0;
let idiomaJuego = "es";

const btnEn = document.getElementById("btn-en");
const btnEs = document.getElementById("btn-es");

btnEn.addEventListener("click", () => {
  idiomaJuego = "en";
  document.getElementById("english").style.display = "block";
  document.getElementById("spanish").style.display = "none";
  document.querySelector(".pdf-section").style.display = "none";
  document.querySelector(".audio-section").style.display = "block";
  actualizarTextoBaloo();
});

btnEs.addEventListener("click", () => {
  idiomaJuego = "es";
  document.getElementById("spanish").style.display = "block";
  document.getElementById("english").style.display = "none";
  document.querySelector(".pdf-section").style.display = "block";
  document.querySelector(".audio-section").style.display = "none";
  actualizarTextoBaloo();
});

function actualizarTextoBaloo() {
  document.getElementById("titulo-juego").textContent =
    idiomaJuego === "es" ? "🕵️‍♂️ Encuentra a Baloo" : "🕵️‍♂️ Find Baloo";
  document.getElementById("instruccion-juego").textContent =
    idiomaJuego === "es" ? "¿Dónde está Baloo escondido?" : "Where is Baloo hiding?";
  document.getElementById("puntaje-baloo").textContent =
    (idiomaJuego === "es" ? "Puntaje: " : "Score: ") + puntajeBaloo;
  document.getElementById("resultado-juego").textContent = "";
}

function nuevaRonda() {
  escondite = Math.floor(Math.random() * 3);
  document.getElementById("resultado-juego").textContent = "";
  document.querySelectorAll(".arbusto").forEach((el) => {
    el.classList.remove("revelado", "error");
    el.style.pointerEvents = "auto";
  });
}

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

  arbustos.forEach((a) => (a.style.pointerEvents = "none"));
}

window.onload = () => {
  nuevaRonda();
  actualizarTextoBaloo();
};
