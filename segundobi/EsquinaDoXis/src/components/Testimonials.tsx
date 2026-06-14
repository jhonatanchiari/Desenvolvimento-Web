import Star from "../assets/star.svg";

interface TestimonialItem {
  image: string;
  title: string;
  category: string;
  description: string;
}

interface TestimonialsProps {
  items: TestimonialItem[];
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only">Nossos lanches</p>
          <h2>Os mais pedidos!</h2>
        </span>

        <p>
          Conheça os lanches mais amados pelos nossos clientes e descubra os
          favoritos da <strong>Esquina do Xis</strong>. Deixe-se levar por
          sabores irresistíveis e escolha o seu próximo pedido!
        </p>
      </header>

      <section className="carousel">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="carousel-content"
            aria-hidden={index === 1}
          >
            {items.map((item, itemIndex) => (
              <article key={itemIndex} className="carousel-card">
                <img src={item.image} alt={item.title} />

                <span className="testimony">
                  <p>{item.description}</p>
                </span>

                <span
                  className="rating"
                  aria-label="Avaliação de cinco estrelas"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <img
                      key={starIndex}
                      src={Star}
                      alt="ícone estrela"
                      width={22}
                      height={22}
                    />
                  ))}
                </span>

                <span className="names">
                  <p>{item.title}</p>
                  <p>{item.category}</p>
                </span>
              </article>
            ))}
          </div>
        ))}
      </section>
    </section>
  );
}