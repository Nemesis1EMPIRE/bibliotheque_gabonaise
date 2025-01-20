// Sélectionner toutes les vidéos et boutons de like
const videoPlayers = document.querySelectorAll(".videoPlayer");
const buttonLikes = document.querySelectorAll(".like");

// Création de l'observateur pour la visibilité des vidéos
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) {
      // Si la vidéo est visible, la lancer
      video.play();
      video.nextElementSibling.classList.remove("show"); // Cache le bouton de lecture
    } else {
      // Sinon, la mettre en pause
      video.pause();
      video.nextElementSibling.classList.add("show"); // Affiche le bouton de lecture
    }
  });
}, {
  threshold: 0.5 // La vidéo doit être à 50 % visible pour être jouée
});

// Appliquer l'observateur à chaque vidéo
videoPlayers.forEach((video) => {
  observer.observe(video);
});

// Fonctionnalité de lecture/pause au clic
videoPlayers.forEach((videoPlayer) => {
  videoPlayer.addEventListener("click", () => {
    if (videoPlayer.paused == false) {
      videoPlayer.pause();
      videoPlayer.nextElementSibling.classList.add("show"); // Affiche le bouton de lecture
    } else {
      videoPlayer.play();
      videoPlayer.nextElementSibling.classList.remove("show"); // Cache le bouton de lecture
    }
  });
});

// Fonctionnalité des likes
buttonLikes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("love"); // Ajoute/retire la classe 'love' au clic
  });
});
