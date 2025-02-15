import { Link } from "@tanstack/react-router"

import PostSearch from "@components/common/PostSearch"

export default function Navigation() {
  return(
    <div className="mb-[50px]">
      <nav className="flex my-[20px]">
        <Link to="/">Главная</Link>

        <div className="ml-auto flex gap-x-[30px]">
          <PostSearch />
            <Link to="/auth/signup">Регистрация</Link>
          <Link to="/admin">Управление</Link>
        </div>
      </nav>
    </div>
  )
}
