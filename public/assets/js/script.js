"use strict";

// CHANGE THEME

// document.querySelector(".theme_btn").addEventListener("click", function(){
//     document.documentElement.classList.toggle("lightMode");
// });

// Seleziona l'elemento del toggle
const themeToggle = document.querySelector(".theme_btn");

// Aggiungi un gestore di eventi al click del toggle
themeToggle.addEventListener("click", function() {
  // Inverti lo stato del toggle aggiungendo o rimuovendo la classe "lightMode" sull'elemento <html>
  document.documentElement.classList.toggle("lightMode");

  // Controlla se la classe "lightMode" è presente sull'elemento <html>
  const isLightMode = document.documentElement.classList.contains("lightMode");

  // Salva lo stato del toggle nello storage locale
  localStorage.setItem("isLightMode", isLightMode);
});

// Ripristina lo stato del toggle al caricamento della pagina
window.addEventListener("load", function() {
  // Ottieni lo stato del toggle dallo storage locale
  const savedState = localStorage.getItem("isLightMode");

  // Se lo stato esiste e corrisponde a "true", aggiungi la classe "lightMode" all'elemento <html>
  if (savedState === "true") {
    document.documentElement.classList.add("lightMode");
  }
});