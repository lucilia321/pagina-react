import ilustracao from '../assets/ilustracao_viagem.png';

export default function Header() {
  return (
    <header className="cabecalho">
      <img
        className="ilustracao"
        src={ilustracao}
        alt="Mulher ao lado de um globo com marcadores de viagem"
      />
    </header>
  );
}