import { React, useRef } from 'react'
import { useQueryClient, useMutation } from 'react-query'
import axios from 'axios'

const createPost = async (newPost) => {
  console.warn(newPost)
  const createPostApiUrl = import.meta.env.VITE_BACKEND_ADMIN_API_URL + "/posts"

  const response = await fetch(createPostApiUrl, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newPost)
  })
}

export default function PostForm()  {
  const queryClient = useQueryClient()
  const formRef = useRef(null)

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
      formRef.current.reset()
    }
  })

  const onSubmitHandler = (e) => {
    e.preventDefault()

    mutate({
      title: e.target.title.value,
      content: e.target.content.value
    })
  }

  return (
    <>
      <div>
        <h2>Добавить пост</h2>
        <form action="/test" onSubmit={onSubmitHandler} ref={formRef}>
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
