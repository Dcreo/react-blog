export default function CommentForm({ createCallback = null }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const { senderName, senderEmail, body } = e.target

    console.warn("form data", senderName.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-[10px]">
          <div>
            <input type="text"
                   name="senderName"
                   placeholder="Имя" />
          </div>
          <div>
            <input type="text"
                   name="senderEmail"
                   placeholder="Email"
            />
          </div>
          <div>
            <textarea name="body"
                      cols="100"
                      placeholder="Комментарий">
            </textarea>
          </div>
          <div>
            <button type="submit">Добавить</button>
          </div>
        </div>
      </form>
    </>
  )
}
