import React from 'react'

export default function PostForm()  {
  function createPost(event) {
    event.preventDefault()
    const { title, content } = event.target
    console.log(content.value, title.value)
  }

  return (
    <>
      <div>
        <h2>Добавить пост</h2>
        <form action="/test" onSubmit={createPost}>
          <div className="flex flex-col gap-2">
            <div><input name="title" /></div>
            <div><textarea name="content" /></div>
            <div><button type="submit">Добавить</button></div>
          </div>
        </form>
      </div>
    </>
  )
}
