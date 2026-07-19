import { useEffect } from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Easter Egg: Gerador de Stickers ao clicar na tela
  useEffect(() => {
    const emojis = ["💻", "🚀", "🔥", "⚡", "✨", "🛠️", "🎮", "👾", "💥", "🎨"];

    const handleGlobalClick = (e) => {
      // Ignora cliques em elementos interativos
      const tagName = e.target.tagName;
      if (['BUTTON', 'A', 'INPUT', 'TEXTAREA'].includes(tagName) || e.target.closest('nav')) {
        return;
      }

      const sticker = document.createElement("div");
      const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
      const tamanho = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
      const rotacao = Math.floor(Math.random() * (45 - (-45) + 1)) + (-45);

      sticker.innerText = emojiAleatorio;
      sticker.style.cssText = `
        position: absolute; top: ${e.pageY - tamanho / 2}px; left: ${e.pageX - tamanho / 2}px;
        font-size: ${tamanho}px; transform: rotate(${rotacao}deg);
        pointer-events: none; user-select: none; z-index: 998;
        animation: surgirESumir 1s forwards ease-out;
      `;

      document.body.appendChild(sticker);
      setTimeout(() => sticker.remove(), 1000);
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">DEV<span>.</span></div>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </nav>

      <header id="hero">
        <div className="container hero-layout">
          <div className="hero-content">
            <span className="hero-subtitle">Disponível para novos projetos</span>
            <h1>Transformando ideias em <span className="text-gradient">códigos de elite</span>.</h1>
            <p className="tagline">Desenvolvedor Full-Stack especializado em criar experiências digitais fabulosas, rápidas e seguras.</p>
            <div className="hero-buttons">
              <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
              <a href="#contato" className="btn btn-secondary">Bater um papo</a>
            </div>
          </div>
          <div className="hero-image-slot">
            <div className="image-glow-wrapper" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsI3v1UWLLJOwyWxe5mKLE2PFviE7KNjqJ5OPqtRlDiFPoxIOLOaYFREB&s=10" alt="" />
            </div>
          </div>
        </div>
      </header>

      <section id="sobre">
        <div className="container">
          <div className="section-title">
            <h2>Sobre Mim</h2>
          </div>
          <p className="about-text">
            Sou um desenvolvedor apaixonado por tecnologia com experiência em diversas áreas da programação. Este portfólio mostra meus projetos divididos por categorias. Cada projeto representa um desafio superado e uma solução implementada.
          </p>
        </div>
      </section>

      {/* Componentes Importados */}
      <Projects />
      <Contact />

      <footer>
        <div className="container footer-content">
          <p className="copyright">&copy; 2026 Meu Portfólio Dev. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;