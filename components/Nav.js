import Link from 'next/link'
import NavLink from './NavLink'

const Nav = () => {
  return (
    <nav className="flex shadow-md bg-white">
      <Link href="/" passHref>
        <NavLink>Home</NavLink>
      </Link>

      <Link href="/about" passHref>
        <NavLink>About</NavLink>
      </Link>

      <Link href="mailto:joe.sak@hey.com" passHref>
        <NavLink>Email</NavLink>
      </Link>
    </nav>
  )
}

export default Nav
