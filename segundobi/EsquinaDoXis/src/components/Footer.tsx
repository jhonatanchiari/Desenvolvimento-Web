import Logo from "../assets/logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--light-gray)",
        color: "var(--second-text-color)",
      }}
    >
      <div className="container" style={{ padding: "3rem 0" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div style={{ maxWidth: "300px" }}>
            <img src={Logo} alt="Esquina do Xis" width={170} />

            <p
              style={{
                marginTop: "1rem",
                lineHeight: "1.6",
              }}
            >
              Desde o primeiro pedido, nossa missão é servir lanches saborosos, bem recheados e preparados com carinho para cada cliente.
            </p>
          </div>

          <div>
            <h4 style={{ color: "var(--text-color)" }}>Navegação</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#home">Início</a></li>
              <li>
                <a
                  href="https://www.ifood.com.br/delivery/cascavel-pr/esquina-do-xis-bairro-coqueiral/9d4d5434-f421-4c8d-aa0c-e0498ae753d4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cardápio
                </a>
              </li>
              <li><a href="#promotions">Promoções</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "var(--text-color)" }}>Atendimento</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#delivery">Delivery</a></li>
              <li><a href="#pickup">Retirada no Local</a></li>
              <li><a href="#hours">Horário de Funcionamento</a></li>
              <li><a href="#delivery-area">Área de Entrega</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "var(--text-color)" }}>Contato</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>📞 (45) 99999-9999</li>
              <li>📧 contato@esquinadoxis.com.br</li>
              <li>📍Rua das Palmeiras, 3590 - Bairro Coqueiral</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e5e5",
          padding: "1rem 0",
        }}
      >
        <div className="container">
          <p
            style={{
              margin: 0,
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            © {year} Esquina do Xis — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}