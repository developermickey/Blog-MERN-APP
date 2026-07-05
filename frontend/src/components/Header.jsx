const Header = () => {
  return (
    <header className="w-full h-24 bg-zinc-900 text-white flex items-center justify-between px-16">
        <h2 className="text-2xl text-emerald-500">Mukesh Pathak</h2>
        <nav className="flex items-center space-x-6">
            <a href="/">Home</a>
            <a href="/about">Courses</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact Us</a>
        </nav>
        <button className="px-6 py-2 bg-emerald-500 rounded-full">Login</button>
    </header>
  )
}

export default Header