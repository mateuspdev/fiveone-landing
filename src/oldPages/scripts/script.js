// Rolagem suave para links internos, permitindo que links externos funcionem normalmente
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Verifica se o link é externo
    if (href.startsWith('http')) {
      return; // Permite que o link externo funcione normalmente
    }

    // Impede o comportamento padrão apenas para links internos
    e.preventDefault();
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Aplica efeito de fade-in conforme as seções aparecem na visualização
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Garante que o título e subtítulo apareçam no carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');

  // Remove qualquer estilo de opacidade para garantir que permaneçam visíveis
  heroTitle.style.opacity = "1";
  heroSubtitle.style.opacity = "1";

  // Adiciona uma classe para controle do fade-in
  heroTitle.classList.add('fade-in');
  heroSubtitle.classList.add('fade-in');
});

// Mostrar o botão "Voltar ao Topo" ao rolar a página
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Rolar para o topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Efeito de Parallax na Seção Hero
window.addEventListener('scroll', function () {
  const hero = document.querySelector('.hero');
  hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Carrossel de navegação
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const carouselItems = document.querySelector('.carousel-items');

leftButton.addEventListener('click', () => {
  carouselItems.scrollBy({ left: -200, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
  carouselItems.scrollBy({ left: 200, behavior: 'smooth' });
});

// Efeito de transição ao carregar a página (loader)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// Rolar suavemente para a seção "Escolha a Sua Trilha" ao clicar no botão "Saiba Mais"

function scrollPosition() {
  window.scrollTo({
    top: 1400, // Define a posição vertical para rolar 500px a partir do topo
    behavior: 'smooth' // Rola suavemente
  });

}

document.getElementById("link-quem-somos").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "quem-somos.html";
});

// Script para ativar animação de fade-in
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.fade-in');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});

// Exemplo de script básico de carrossel
let currentIndex = 0;
const images = document.querySelectorAll('.movement-images img');
setInterval(() => {
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? 'block' : 'none';
  });
  currentIndex = (currentIndex + 1) % images.length;
}, 3000);

document.getElementById("insightsLink").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "insights.html";
});
document.getElementById("link-teste-dons").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "teste-dons.html";
})