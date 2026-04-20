function Sidebar({ posts }) {
  return (
    <aside className="sidebar">
      <h3>Posts relacionados</h3>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <a href="#">{post}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
