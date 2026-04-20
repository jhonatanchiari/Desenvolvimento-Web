function Article({ post }) {
  const { titulo, autor, data, dataIso, conteudo, imagens } = post

  return (
    <article className="article">
      <h2>{titulo}</h2>
      <p className="meta">Por {autor}</p>
      <time dateTime={dataIso}>{data}</time>

      {conteudo.slice(0, 2).map((paragrafo) => (
        <p key={paragrafo}>{paragrafo}</p>
      ))}

      <figure>
        <img src={imagens[0].src} alt={imagens[0].alt} width="600" />
        <figcaption>{imagens[0].legenda}</figcaption>
      </figure>

      {conteudo.slice(2).map((paragrafo) => (
        <p key={paragrafo}>{paragrafo}</p>
      ))}

      <figure>
        <img src={imagens[1].src} alt={imagens[1].alt} width="600" />
        <figcaption>{imagens[1].legenda}</figcaption>
      </figure>
    </article>
  )
}

export default Article
