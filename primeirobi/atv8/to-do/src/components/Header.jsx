function Header({ eyebrow, title, subtitle }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="titulo-principal">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </>
  )
}

export default Header
