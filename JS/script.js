document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio Neo-Brutalista Ativo! 🚀");

    // 1. FILTRO DINÂMICO DE PROJETOS
    criarFiltrosProjetos();

    // 2. SUBMISSÃO DO FORMULÁRIO COM MODAL BRUTALISTA
    configurarFormularioContato();

    // 3. EASTER EGG: GERADOR DE STICKERS (Cliques na Tela)
    configurarEfeitoStickers();

    // 4. MICRO-INTERAÇÕES NOS CARDS (Efeito de Peso de Sombra)
    configurarEfeitosCards();
});

/* ==========================================================================
   1. FILTRO DE PROJETOS
   Injeta botões brutalistas para filtrar as categorias de projetos.
   ========================================================================== */
function criarFiltrosProjetos() {
    const sectionProjetos = document.querySelector("#projetos");
    if (!sectionProjetos) return;

    // Criar container dos botões de filtro
    const filterContainer = document.createElement("div");
    filterContainer.className = "container filter-buttons-container";
    filterContainer.style.cssText = `
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    `;

    const categorias = [
        { id: "todos", nome: "⚡ Ver Todos", color: "#FFDE4D" },
        { id: "frontend", nome: "🖥️ Front-end", color: "#38bdf8" },
        { id: "backend", nome: "⚙️ Back-end", color: "#a855f7" },
        { id: "database", nome: "🗃️ Banco de Dados", color: "#22c55e" },
        { id: "cybersecurity", nome: "🔒 Cybersecurity", color: "#ff4a5a" }
    ];

    categorias.forEach(cat => {
        const btn = document.createElement("button");
        btn.innerText = cat.nome;
        btn.className = "filter-btn";
        btn.style.cssText = `
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 800;
            text-transform: uppercase;
            padding: 0.8rem 1.2rem;
            border: 3px solid #1a1a1a;
            background-color: #ffffff;
            box-shadow: 4px 4px 0px #1a1a1a;
            cursor: pointer;
            transition: all 0.1s ease;
        `;

        // Eventos de hover e clique nos botões de filtro
        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = cat.color;
            if (cat.id !== "todos" && cat.id !== "backend") {
                btn.style.color = "#1a1a1a";
            } else {
                btn.style.color = "#1a1a1a";
            }
        });

        btn.addEventListener("mouseleave", () => {
            if (!btn.classList.contains("active")) {
                btn.style.backgroundColor = "#ffffff";
                btn.style.color = "#1a1a1a";
            }
        });

        btn.addEventListener("click", () => {
            // Resetar estado de todos os botões
            document.querySelectorAll(".filter-btn").forEach(b => {
                b.classList.remove("active");
                b.style.backgroundColor = "#ffffff";
                b.style.transform = "none";
                b.style.boxShadow = "4px 4px 0px #1a1a1a";
            });

            // Ativar botão atual
            btn.classList.add("active");
            btn.style.backgroundColor = cat.color;
            btn.style.transform = "translate(2px, 2px)";
            btn.style.boxShadow = "2px 2px 0px #1a1a1a";

            filtrarCategorias(cat.id);
        });

        filterContainer.appendChild(btn);
    });

    // Inserir os botões antes dos projetos
    sectionProjetos.insertBefore(filterContainer, sectionProjetos.firstChild);
}

function filtrarCategorias(categoriaId) {
    const categoriasContainers = document.querySelectorAll(".project-category");

    categoriasContainers.forEach(container => {
        const titulo = container.querySelector("h2").innerText.toLowerCase();

        if (categoriaId === "todos") {
            container.style.display = "block";
        } else {
            // Mapeamento simples para cruzar o ID com o texto do título
            const mapaDeNomes = {
                "frontend": "front-end",
                "backend": "back-end",
                "database": "banco de dados",
                "cybersecurity": "cybersecurity"
            };

            if (titulo.includes(mapaDeNomes[categoriaId])) {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        }
    });
}

/* ==========================================================================
   2. POP-UP DE SUCESSO (MODAL BRUTALISTA)
   Controla o envio do formulário e mostra um modal interativo na tela.
   ========================================================================== */
function configurarFormularioContato() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const mensagem = document.querySelector("#mensagem").value;

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos! 🚨");
            return;
        }

        // Criar o Modal Brutalista dinamicamente
        const modal = document.createElement("div");
        modal.className = "brutalist-modal";
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #FFDE4D;
            border: 5px solid #1a1a1a;
            box-shadow: 10px 10px 0px #1a1a1a;
            padding: 2.5rem;
            z-index: 1000;
            max-width: 450px;
            width: 90%;
            text-align: center;
        `;

        modal.innerHTML = `
            <h3 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem; text-transform: uppercase; color: #1a1a1a;">
                Mensagem Enviada! 💥
            </h3>
            <p style="font-weight: 600; margin-bottom: 1.5rem; color: #1a1a1a; line-height: 1.5;">
                Obrigado, <strong>${nome}</strong>! Entrarei em contacto consigo através do email <em>${email}</em> em menos de 24 horas.
            </p>
            <button id="close-modal" style="
                background: #fff;
                color: #1a1a1a;
                font-family: inherit;
                font-weight: 800;
                text-transform: uppercase;
                padding: 0.8rem 1.5rem;
                border: 3px solid #1a1a1a;
                box-shadow: 4px 4px 0px #1a1a1a;
                cursor: pointer;
            ">Fechar Janela</button>
        `;

        // Background escurecido atrás do modal (Overlay)
        const overlay = document.createElement("div");
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(26, 26, 26, 0.8);
            z-index: 999;
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        // Limpar o formulário
        form.reset();

        // Fechar modal
        const fecharBtn = document.getElementById("close-modal");
        const fecharModal = () => {
            modal.remove();
            overlay.remove();
        };

        fecharBtn.addEventListener("click", fecharModal);
        overlay.addEventListener("click", fecharModal);
    });
}

/* ==========================================================================
   3. GERADOR DE STICKERS BRUTALISTAS (Easter Egg)
   Gera um emoji gigante temporário no local onde o utilizador clica na tela.
   ========================================================================== */
function configurarEfeitoStickers() {
    const emojis = ["💻", "🚀", "🔥", "⚡", "✨", "🛠️", "🎮", "👾", "💥", "🎨"];

    document.addEventListener("click", (e) => {
        // Evitar criar stickers se o clique for em botões, links ou formulários
        if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.closest("nav")) {
            return;
        }

        const sticker = document.createElement("div");
        const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];

        // Tamanho e rotação aleatórios para parecer colado à mão
        const tamanho = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
        const rotacao = Math.floor(Math.random() * (45 - (-45) + 1)) + (-45);

        sticker.innerText = emojiAleatorio;
        sticker.style.cssText = `
            position: absolute;
            top: ${e.pageY - tamanho / 2}px;
            left: ${e.pageX - tamanho / 2}px;
            font-size: ${tamanho}px;
            transform: rotate(${rotacao}deg);
            pointer-events: none;
            user-select: none;
            z-index: 998;
            animation: surgirESumir 1s forwards ease-out;
        `;

        document.body.appendChild(sticker);

        // Remove do DOM após a animação acabar
        setTimeout(() => {
            sticker.remove();
        }, 1000);
    });

    // Injetar a animação CSS do sticker dinamicamente
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes surgirESumir {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            20% { transform: scale(1.2) rotate(var(--rotation, 15deg)); opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(-20px) scale(0.8); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

/* ==========================================================================
   4. EFEITOS FÍSICOS NOS CARDS DE PROJETOS
   Simula uma leve pressão física na sombra dos cartões ao passar o rato.
   ========================================================================== */
function configurarEfeitosCards() {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        card.style.transition = "transform 0.1s ease, box-shadow 0.1s ease";

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translate(3px, 3px)";
            card.style.boxShadow = "3px 3px 0px #1a1a1a";
        });

        card.style.transform = "translate(0px, 0px)";
        card.style.boxShadow = "6px 6px 0px #1a1a1a";

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translate(0px, 0px)";
            card.style.boxShadow = "6px 6px 0px #1a1a1a";
        });
    });
}