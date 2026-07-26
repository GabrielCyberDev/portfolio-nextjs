'use client';

import { useState } from 'react';

import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './ContactForm.module.css';

const INITIAL_FORM = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');

    try {
      // Chama a API Route em src/app/api/contact/route.js — roda no
      // servidor do Next, então dá pra integrar um serviço de e-mail real
      // (Resend, SendGrid etc.) sem precisar de um backend separado.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Falha no envio');

      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section id="contato" className="section section-border">
      <div className="container">
        <SectionTitle
          eyebrow="contato"
          title="Vamos conversar"
          subtitle="Envie uma mensagem ou me encontre nas redes abaixo."
        />

        <div className={styles.grid}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.field}>
              <span>Nome</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span>Mensagem</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>

            {status === 'success' && (
              <p className={styles.feedbackSuccess}>Mensagem enviada com sucesso.</p>
            )}
            {status === 'error' && (
              <p className={styles.feedbackError}>
                Não foi possível enviar agora. Tente novamente em instantes.
              </p>
            )}
          </form>

          <ul className={styles.socialList}>
            <li>
              <a href="https://github.com/GabrielCyberDev" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gabriel-costa-178657267/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:gabrielcostadelima98@gmail.com">E-mail direto</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}