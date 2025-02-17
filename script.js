document.addEventListener('DOMContentLoaded', function () {
  // Menú Burger
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // Alterna el atributo aria-expanded
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
    // Animación para cada enlace
    navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    });
    burger.classList.toggle('toggle');
  });

  // Scroll suave para enlaces ancla
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Slider de la sección Hero
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000);

  // Funcionalidades del Modal de imagen
  window.openModal = function(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.style.display = "block";
  };

  window.closeModal = function() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
  };

  window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
      closeModal();
    }
  });

  // Funcionalidad para el video interactivo
  const tourVideo = document.getElementById('tourVideo');
  const videoOverlay = document.querySelector('.video-overlay');
  if (tourVideo) {
    tourVideo.addEventListener('play', () => {
      videoOverlay.style.display = 'none';
    });
    tourVideo.addEventListener('pause', () => {
      videoOverlay.style.display = 'flex';
    });
  }
});
