import { useState } from 'react'
import { FaBagShopping, FaBars, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="border-b border-[#dedbd3] bg-[#f8f7f3]/95">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-[#18352f]">morrow<span className="text-[#d36f4a]">.</span></Link>
      <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-[#18352f] md:hidden" aria-label="Toggle navigation">{menuOpen ? <FaXmark /> : <FaBars />}</button>
      <nav className={`${menuOpen ? 'block' : 'hidden'} absolute left-0 top-[73px] z-20 w-full border-b border-[#dedbd3] bg-[#f8f7f3] px-5 py-4 md:static md:block md:w-auto md:border-0 md:p-0`}>
        <ul className="flex flex-col gap-4 text-sm font-semibold text-[#53605a] md:flex-row md:items-center md:gap-8">
          <li><Link onClick={closeMenu} to="/" className="hover:text-[#d36f4a]">Home</Link></li>
          <li><Link onClick={closeMenu} to="/product" className="hover:text-[#d36f4a]">Shop all</Link></li>
          <li><Link onClick={closeMenu} to="/contact-us" className="hover:text-[#d36f4a]">Contact</Link></li>
          <li><button className="flex items-center gap-2 hover:text-[#d36f4a]" aria-label="Shopping bag"><FaBagShopping /><span className="md:hidden">Bag (0)</span></button></li>
        </ul>
      </nav>
    </div>
  </header>
}
