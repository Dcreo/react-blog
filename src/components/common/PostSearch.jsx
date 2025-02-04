export default function PostSearch({ query }) {
  return(
    <div>
      <form className="flex gap-x-[5px]">
        <input type="text" name="query" placeholder="Поиск" />
        <input type="submit" name="Поиск" />
      </form>
    </div>
  )
}
