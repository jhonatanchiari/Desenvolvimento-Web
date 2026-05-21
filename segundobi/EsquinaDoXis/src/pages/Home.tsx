import { useEffect, useState } from "react";
import "../styles/utility.css"
import "../styles/header.css"
import "../styles/hero.css"
import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Food from "../assets/food.svg"
import Delivery from "../assets/delivery.svg"
import Money from "../assets/money.svg"
import Close from "../assets/close.svg"
import Button from "../components/Button";
import Card from "../components/Card";
import HeroRectangleOne from "../assets/rectangle1.svg"
import HeroRectangleTwo from "../assets/rectangle2.svg"
import "../styles/solution.css"

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

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
                <a href="#testimonials">Depoimentos</a>
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
                       <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
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
            Os lanches mais insanos da cidade, preparados na hora e entregues quentinhos pra você.
          </p>
          <div className="flex gap-1.5">
            <span>
              <Button text="Cadastre-se" />
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
                Sob medida para você
              </h2>
            </span>
          </span>
          <p>
            Inovação é com a gente! A <strong>DonaFrost </strong>
            já conquistou diversos clientes, seja você mais um deles,
            veja tudo que pode ganhar com nossos serviços.
          </p>
        </header>
        <section className="even-columns">
          <Card
            icon={Food}
            iconAlt="ícone campeão"
            title="Produto Vencedor"
            description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
          />

          <Card
            icon={Money}
            iconAlt="ícone campeão"
            title="Produto Vencedor"
            description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
          />

          <Card
            icon={Delivery}
            iconAlt="ícone campeão"
            title="Produto Vencedor"
            description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
          />
        </section>
      </section>

    </>
  );
}