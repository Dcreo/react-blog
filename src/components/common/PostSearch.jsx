import { useSearchStore } from "@app/store"

export default function PostSearch() {
  const query = useSearchStore((state) => state.query)
  const setQuery = useSearchStore((state) => state.setQuery)

  const searchHandler = (e) => {
    e.preventDefault()
    setQuery(e.target.query.value)
    console.warn("search query", e.target.query.value, query)
  }

  return(
    <div>
      <form className="flex gap-x-[5px]" onSubmit={searchHandler}>
        <input type="text" name="query" placeholder="Поиск" />
        <input type="submit" name="Поиск" />
      </form>
    </div>
  )
}
