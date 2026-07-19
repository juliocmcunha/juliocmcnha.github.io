import { useState } from 'react';

// Todos os 12 projetos do HTML original convertidos para objetos JavaScript
const projetosData = [
    // --- FRONT-END ---
    {
        id: 1,
        categoria: 'frontend',
        icone: '🖥️',
        titulo: 'Landing Page Moderna',
        desc: 'Uma landing page responsiva com animações CSS e JavaScript.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        colorClass: 'frontend'
    },
    {
        id: 2,
        categoria: 'frontend',
        icone: '📱',
        titulo: 'Aplicativo React',
        desc: 'Aplicativo web construído com React e Redux para gerenciamento de estado.',
        tags: ['React', 'Redux'],
        colorClass: 'frontend'
    },
    {
        id: 3,
        categoria: 'frontend',
        icone: '🎨',
        titulo: 'Dashboard Admin',
        desc: 'Painel administrativo com gráficos interativos e tabelas dinâmicas.',
        tags: ['Vue.js', 'Chart.js'],
        colorClass: 'frontend'
    },

    // --- BACK-END ---
    {
        id: 4,
        categoria: 'backend',
        icone: '⚙️',
        titulo: 'API RESTful',
        desc: 'API desenvolvida em PHP utilizando arquitetura REST.',
        tags: ['PHP', 'API', 'RESTful'],
        colorClass: 'backend'
    },
    {
        id: 5,
        categoria: 'backend',
        icone: '🤖',
        titulo: 'Microserviço Node',
        desc: 'Serviço de processamento de dados usando JQuery.',
        tags: ['Node.js', 'JQuery'],
        colorClass: 'backend'
    },
    {
        id: 6,
        categoria: 'backend',
        icone: '🔗',
        titulo: 'Sistema de Autenticação',
        desc: 'Sistema completo de autenticação com OAuth2 e roles.',
        tags: ['Java', 'OAuth2'],
        colorClass: 'backend'
    },

    // --- BANCO DE DADOS ---
    {
        id: 7,
        categoria: 'database',
        icone: '🗃️',
        titulo: 'Modelo de Dados',
        desc: 'Modelagem de banco de dados relacional para sistema de e-commerce.',
        tags: ['PostgreSQL', 'SQL'],
        colorClass: 'database'
    },
    {
        id: 8,
        categoria: 'database',
        icone: '📊',
        titulo: 'ETL Process',
        desc: 'Pipeline de extração, transformação e carga de dados.',
        tags: ['Python', 'Pandas'],
        colorClass: 'database'
    },
    {
        id: 9,
        categoria: 'database',
        icone: '🔍',
        titulo: 'Otimização de Queries',
        desc: 'Análise e otimização de queries SQL para melhorar performance.',
        tags: ['MySQL', 'EXPLAIN'],
        colorClass: 'database'
    },

    // --- CYBERSECURITY ---
    {
        id: 10,
        categoria: 'cybersecurity',
        icone: '🔒',
        titulo: 'Scanner de Vulnerabilidades',
        desc: 'Script para identificar vulnerabilidades comuns em aplicações web.',
        tags: ['Python', 'OWASP'],
        colorClass: 'cybersecurity'
    },
    {
        id: 11,
        categoria: 'cybersecurity',
        icone: '🛡️',
        titulo: 'Autenticação 2FA',
        desc: 'Implementação de autenticação em dois fatores.',
        tags: ['Node.js', 'Speakeasy'],
        colorClass: 'cybersecurity'
    },
    {
        id: 12,
        categoria: 'cybersecurity',
        icone: '👁️',
        titulo: 'Monitoramento de Logs',
        desc: 'Sistema para análise de logs e detecção de atividades suspeitas.',
        tags: ['ELK Stack', 'SIEM'],
        colorClass: 'cybersecurity'
    }
];

const categorias = [
    { id: 'todos', nome: '⚡ Ver Todos', color: '#FFDE4D' },
    { id: 'frontend', nome: '🖥️ Front-end', color: '#38bdf8' },
    { id: 'backend', nome: '⚙️ Back-end', color: '#a855f7' },
    { id: 'database', nome: '🗃️ Banco de Dados', color: '#22c55e' },
    { id: 'cybersecurity', nome: '🔒 Cybersecurity', color: '#ff4a5a' }
];

export default function Projects() {
    const [filtroAtivo, setFiltroAtivo] = useState('todos');

    // Filtra dinamicamente a lista com base no botão clicado
    const projetosFiltrados = filtroAtivo === 'todos'
        ? projetosData
        : projetosData.filter(proj => proj.categoria === filtroAtivo);

    return (
        <section id="projetos">
            <div className="container">

                {/* Título da Secção Brutalista adaptável */}
                <div className="section-title" style={{ marginBottom: '2rem' }}>
                    <h2>
                        Meus Projetos{' '}
                        {filtroAtivo !== 'todos' && (
                            <span className={`text-gradient-${filtroAtivo === 'frontend' ? 'blue' : filtroAtivo === 'backend' ? 'purple' : filtroAtivo === 'database' ? 'green' : ''}`} style={filtroAtivo === 'cybersecurity' ? { backgroundColor: '#ff4a5a', color: 'white', padding: '0.2rem 0.6rem', border: '4px solid #1a1a1a' } : {}}>
                                {categorias.find(c => c.id === filtroAtivo)?.nome.split(' ')[1]}
                            </span>
                        )}
                    </h2>
                </div>

                {/* Botões de Filtro Neo-Brutalistas */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {categorias.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFiltroAtivo(cat.id)}
                            className="filter-btn"
                            style={{
                                fontFamily: 'inherit',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                padding: '0.8rem 1.2rem',
                                border: '3px solid #1a1a1a',
                                cursor: 'pointer',
                                transition: 'all 0.1s ease',
                                backgroundColor: filtroAtivo === cat.id ? cat.color : '#ffffff',
                                boxShadow: filtroAtivo === cat.id ? '2px 2px 0px #1a1a1a' : '4px 4px 0px #1a1a1a',
                                transform: filtroAtivo === cat.id ? 'translate(2px, 2px)' : 'none',
                                color: '#1a1a1a'
                            }}
                        >
                            {cat.nome}
                        </button>
                    ))}
                </div>

                {/* Grid Dinâmica de Projetos */}
                <div className="projects-grid">
                    {projetosFiltrados.map((projeto) => (
                        <div className="project-card" key={projeto.id}>
                            <div className={`project-image ${projeto.colorClass}`}>
                                {projeto.icone}
                            </div>
                            <div className="project-info">
                                <h3>{projeto.titulo}</h3>
                                <p>{projeto.desc}</p>
                                <div className="tech-tags">
                                    {projeto.tags.map(tag => (
                                        <span key={tag} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}