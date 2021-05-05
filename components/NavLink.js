import { forwardRef } from 'react'

const NavLink = forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="
        py-4
        px-8
        font-bold
        cursor-pointer
        text-blue-400
        hover:text-blue-900
        transition
        duration-300
      "
    >
      {children}
    </a>
  )
})

export default NavLink
