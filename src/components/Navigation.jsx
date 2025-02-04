import { Link } from "@tanstack/react-router"

import PostSearch from "@components/common/PostSearch"

export default function Navigation() {
  return(
    <div>
      <nav className="flex my-[20px]">
        <Link to="/">Главная</Link>

        <div className="ml-auto flex gap-x-[30px]">
          <PostSearch />
          <Link to="/admin">Управление</Link>
        </div>
      </nav>
    </div>
  )
}
