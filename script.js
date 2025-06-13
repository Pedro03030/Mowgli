function showEnglish() {
  document.getElementById("english").style.display = "block";
  document.getElementById("spanish").style.display = "none";
  document.querySelector(".pdf-section").style.display = "none"; // Oculta el PDF
}

function showSpanish() {
  document.getElementById("spanish").style.display = "block";
  document.getElementById("english").style.display = "none";
  document.querySelector(".pdf-section").style.display = "block"; // Muestra el PDF
}
