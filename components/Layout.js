import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <div className="text-gray-700 h-full bg-gray-50">
      <Nav />
      <main className="p-4">
        {children}
      </main>
    </div>
  )
}

export default Layout
