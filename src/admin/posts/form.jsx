import React from 'react'
import axios from 'axios'

export default function PostForm({ onCreatePost })  {
  const createPostApiUrl = import.meta.env.VITE_BACKEND_ADMIN_API_URL + "/posts"

  const createPost = (event) => {
    event.preventDefault()
    const { title, content } = event.target
    console.log(content.value, title.value, createPostApiUrl)
    axios.post(createPostApiUrl, {
      post: {
        title: title.value,
        content: content.value
      }
    }).then(response => {
      onCreatePost(response.data)
    })
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
