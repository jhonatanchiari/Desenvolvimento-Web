function Navigation({ links }) {
  return (
    <nav className="navigation" aria-label="Navegacao principal">
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
