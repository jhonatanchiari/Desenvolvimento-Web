import { useEffect, useState, type FormEvent } from "react";
import "../styles/utility.css"
import "../styles/header.css"
import "../styles/hero.css"
import Logo from "../assets/logo.svg"
import Menu from "../assets/Menu.svg"
import Food from "../assets/food.svg"
import Delivery from "../assets/delivery.svg"
import Money from "../assets/money.svg"
import Close from "../assets/Close.svg"
// import Client from "../assets/client.svg"
import Check from "../assets/check.svg"
import Button from "../components/Button";
import Card from "../components/Card";
import HeroRectangleOne from "../assets/rectangle1.svg"
import HeroRectangleTwo from "../assets/rectangle2.svg"
import "../styles/solution.css"
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import Footer from "../components/Footer";
import ifoodLogo from "../assets/ifood.svg";
import XBacon from "../assets/x_bacon.svg";
import Hotdog from "../assets/hotdog_tradicional.svg";
import XCalab from "../assets/x_calabresa.svg";
import XBurger from "../assets/x_burguer.svg";
import Testimonials from "../components/Testimonials";



type FeedbackState = {
  type: "success" | "error";
  message: string;
} | null;

const lanches = [
  {
    image: XBurger,
    title: "X Burguer",
    category: "Clássico",
    description:
      "Pão Grande, Hambúrguer de Costela 150g, Presunto, Queijo, Mostarda, Ketchup e Maionese Verde",
  },
  {
    image: XBacon,
    title: "X Bacon",
    category: "Clássico",
    description:
      "Pão Grande, Hambúrguer de Costela 150g, Tiras de Bacon, Alface, Tomate, Milho, Ervilha, Presunto, Queijo, Batata Palha, Mostarda, Ketchup e Maionese Verde",
  },
  {
    image: Hotdog,
    title: "Hot Dog",
    category: "Clássico",
    description:
      "Pão, 1 Salsicha, Vinagrete, Milho, Ervilha, Batata Palha, Mostarda, Ketchup, Maionese Verde, Molho de Panela, Selado com Queijo",
  },
  {
    image: XCalab,
    title: "X Calabresa",
    category: "Clássico",
    description:
      "Pão Grande, Hambúrguer de Costela 150g, Calabresa, Alface, Tomate, Milho, Ervilha, Presunto, Queijo, Batata Palha, Mostarda, Ketchup e Maionese Verde",
  },
];

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFeedback(null);
    setIsSending(true);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error ?? "Não foi possível enviar sua mensagem agora.");
      }

      setFeedback({
        type: "success",
        message: data?.message ?? "Mensagem enviada com sucesso.",
      });
      setEmail("");
      setMessage("");
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Falha ao enviar o formulário. Tente novamente.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo Esquina do Xis" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Nossos Lanches</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">Login</a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ?
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Nossos Lanches</a>
                    </li>
                    <li>
                      <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">Login</a>
                    </li>
                  </ul>
                  <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
              :
              <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            }
          </div>

        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <p className="desktop-only">
            Olá
          </p>
          <h1>Lanche Prensado crocante por fora, absurdo por dentro.</h1>

          <p>
            Hambúrgueres artesanais, xis prensados e porções preparados na hora e entregues quentinhos no conforto da sua casa.
          </p>
          <div className="flex gap-1.5">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <span className="desktop-only">
                <a
                  href="https://www.ifood.com.br/delivery/cascavel-pr/esquina-do-xis-bairro-coqueiral/9d4d5434-f421-4c8d-aa0c-e0498ae753d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    text="Ver iFood"
                    secondary
                    icon={ifoodLogo}
                  />
                </a>
              </span>
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section >

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>
               Sabor onde estiver
              </h2>
            </span>
          </span>
          <p>
           Dos lanches clássicos aos mais recheados. Escolha seu favorito e descubra por que a <strong>Esquina do Xis</strong> é referência em sabor.
          </p>
        </header>
        <section className="even-columns">
          <Card
            icon={Food}
            iconAlt="ícone campeão"
            title="Lanches Incríveis"
            description="Lanches prensados, crocantes por fora e absurdos por dentro, preparados na hora e entregues quentinhos para você no conforto da sua casa."
          />

          <Card
            icon={Money}
            iconAlt="ícone campeão"
            title="Preços Justos"
            description="Oferecemos os melhores preços do mercado, sem abrir mão da qualidade. Compre com confiança e economize com nossas promoções."
          />

          <Card
            icon={Delivery}
            iconAlt="ícone campeão"
            title="Entrega Rápida"
            description="Entregamos seus lanches quentinhos e saborosos em tempo recorde, para que você possa desfrutar de uma experiência completa."
          />
        </section>
      </section>

     <Testimonials items={lanches} />

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Uma bebida cortesia no primeiro pedido</p>
            </span>

            <h2>Grátis</h2>

            <Button text="Pedir agora" secondary />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Retire na loja</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Livre escolha</p>
            </span>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>

            <span className="plan">
              <h3>Premium</h3>
              <p>Para quem precisa de um plano mais completo</p>
            </span>

            <span className="price">
              <h2>R$ 139,90</h2>
              <p>/mês</p>
            </span>

            <Button text="Pedir agora" />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>3 Entregas em Cascavel</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>6 Lanches por mês</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>6 bebidas por mês</p>
            </span>
          </div>

          <div className="pricing-card">
            <span className="plan">
              <h3>Extra</h3>
              <p>Uma experiência adicional com benefícios exclusivos</p>
            </span>

            <span className="price">
              <h2>R$ 89,90</h2>
              <p>/mês</p>
            </span>

            <Button text="Pedir agora" secondary />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 Entregas</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>4 Lanches por mês</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>4 Sucos por mês</p>
            </span>
          </div>
        </section>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <header className="contact-header">
            <p>Envie sua dúvida</p>
            <h2>Entre em contato</h2>
            <p>
               Tem alguma dúvida, sugestão ou deseja fazer um pedido especial?
    Nossa equipe está pronta para ajudar e garantir a melhor
    experiência para você. Entre em contato e retornaremos o mais
    rápido possível.
            </p>
          </header>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Seu Email</span>
              <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label className="contact-field">
              <span>Mensagem</span>
              <textarea
                placeholder="Motivo do contato. Ex: Gostei muito do lanche, duvidas, sugestões..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                required
              />
            </label>

            <Button
              text={isSending ? "Enviando..." : "Enviar"}
              type="submit"
              disabled={isSending}
            />

            

            {feedback && (
              <p
                className={`contact-feedback ${feedback.type === "success" ? "success" : "error"
                  }`}
              >
                {feedback.message}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}