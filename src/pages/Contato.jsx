export default function Contato() {
  return (
    <section className="pagina">
      <h1>Entre em contato</h1>

      <p>
        Utilize este espaço para entrar em contato conosco.
      </p>

      <form>
        <label htmlFor="nome">Nome:</label>
        <input id="nome" type="text" placeholder="Digite seu nome" />

        <label htmlFor="email">E-mail:</label>
        <input id="email" type="email" placeholder="Digite seu e-mail" />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" placeholder="Escreva sua mensagem" />

        <button type="button">Enviar</button>
      </form>
    </section>
  );
}