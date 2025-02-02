import { Link } from "@tanstack/react-router"

export default function Navigation() {
  return(
    <div>
      <nav className="flex my-[20px]">
        <Link to="/">Главная</Link>
        <Link to="/admin" className="ml-auto">Управление</Link>
      </nav>
    </div>
  )
}
