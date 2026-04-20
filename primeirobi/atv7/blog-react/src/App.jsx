import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import praiaImage from './assets/praia.jpg'
import praia2Image from './assets/praia2.jpg'
import './App.css'

function App() {
  const navigationLinks = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Contato', href: '#' },
  ]

  const post = {
    titulo: 'Descobrindo as praias do Nordeste',
    autor: 'Ana Souza',
    data: '12 de marco de 2026',
    dataIso: '2026-03-12',
    conteudo: [
      'O Nordeste do Brasil e conhecido por suas praias paradisiacas, com aguas cristalinas e areias brancas. Neste artigo, vamos explorar algumas das melhores praias da regiao, como Jericoacoara, Praia do Forte e Porto de Galinhas. Prepare-se para se encantar com a beleza natural e a cultura vibrante dessas praias incriveis!',
      'Alem das praias, o Nordeste tambem oferece uma rica gastronomia, com pratos tipicos como acaraje, moqueca e tapioca. Nao deixe de experimentar essas delicias durante sua visita. E para os amantes de aventura, ha opcoes de esportes aquaticos, como kitesurf e mergulho, que proporcionam experiencias inesqueciveis.',
      'Se voce esta planejando uma viagem para o Nordeste, nao deixe de incluir essas praias incriveis em seu roteiro. Com sua beleza natural, cultura rica e opcoes de lazer, o Nordeste e um destino imperdivel para os amantes de viagens e aventuras.',
      'Aproveite para explorar as praias do Nordeste e criar memorias inesqueciveis em um dos destinos mais encantadores do Brasil!',
    ],
    imagens: [
      {
        src: praiaImage,
        alt: 'Praia do Nordeste',
        legenda: 'Praia paradisiaca do Nordeste Brasileiro',
      },
      {
        src: praia2Image,
        alt: 'Falesias no litoral do Nordeste',
        legenda: 'Por do sol em Fernando de Noronha',
      },
    ],
  }

  const relatedPosts = [
    'Viagens para o Sul',
    'Economize em Passagens com Milhas',
    'Melhores Restaurantes',
    'Pacotes de Viagens',
  ]

  return (
    <div className="app">
      <Header titulo="Meu Blog de Viagens" />
      <Navigation links={navigationLinks} />

      <main className="main-content">
        <Article post={post} />
      </main>

      <Sidebar posts={relatedPosts} />
      <Footer texto="© 2026 - Todos os direitos reservados." />
    </div>
  )
}

export default App
