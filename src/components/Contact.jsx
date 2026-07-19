import { useState } from 'react';

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos! 🚨");
            return;
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setNome('');
        setEmail('');
        setMensagem('');
    };

    return (
        <section id="contato">
            <div className="container contact-layout">
                <div className="section-title">
                    <h2>Vamos criar algo <br /><span className="text-gradient">fabuloso juntos?</span></h2>
                    <p style={{ color: '#a0aec0', marginTop: '1rem' }}>Preencha o formulário e responderei em menos de 24 horas.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome completo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" rows="5" value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Me conte sobre o seu projeto..."></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Enviar Mensagem</button>
                </form>
            </div>

            {/* Modal Brutalista renderizado condicionalmente */}
            {showModal && (
                <>
                    <div onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(26, 26, 26, 0.8)', zIndex: 999 }}></div>
                    <div className="brutalist-modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#FFDE4D', border: '5px solid #1a1a1a', boxShadow: '10px 10px 0px #1a1a1a', padding: '2.5rem', zIndex: 1000, maxWidth: '450px', width: '90%', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase', color: '#1a1a1a' }}>Mensagem Enviada! 💥</h3>
                        <p style={{ fontWeight: 600, marginBottom: '1.5rem', color: '#1a1a1a', lineHeight: 1.5 }}>
                            Obrigado, <strong>{nome}</strong>! Entrarei em contato pelo email <em>{email}</em> em menos de 24 horas.
                        </p>
                        <button onClick={closeModal} style={{ background: '#fff', color: '#1a1a1a', fontFamily: 'inherit', fontWeight: 800, textTransform: 'uppercase', padding: '0.8rem 1.5rem', border: '3px solid #1a1a1a', boxShadow: '4px 4px 0px #1a1a1a', cursor: 'pointer' }}>
                            Fechar Janela
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}