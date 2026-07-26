import { Resend } from 'resend';

export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      'RESEND_API_KEY não configurada. Crie um arquivo .env.local com base em .env.local.example.',
    );
    return Response.json({ error: 'Envio de e-mail não configurado no servidor.' }, { status: 500 });
  }

  // Instanciado dentro da função (não no topo do arquivo) para não quebrar
  // o build quando a variável de ambiente ainda não existe.
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      // "onboarding@resend.dev" é o remetente de teste do Resend — funciona
      // sem precisar verificar um domínio próprio, mas só entrega para o
      // e-mail da conta Resend cadastrada (o seu, gabrielcostadelima98@gmail.com).
      from: 'Portfólio <onboarding@resend.dev>',
      to: 'gabrielcostadelima98@gmail.com',
      replyTo: email,
      subject: `Contato via portfólio — ${name}`,
      text: `${message}\n\nDe: ${name} <${email}>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return Response.json({ error: 'Falha ao enviar a mensagem.' }, { status: 500 });
  }
}