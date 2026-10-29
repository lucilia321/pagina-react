import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="rodape">
      <nav className="links-rodape">
        <Link to="/sobre">Destinos</Link>
        <Link to="/servicos">Ofertas</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </footer>
  );
}