import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostForm from '@src/admin/posts/form'
import { useQuery, useQueryClient } from 'react-query'

const getPosts = async () => {
  // TODO URLS to Constants
  const postsApiUrl = import.meta.env.VITE_BACKEND_ADMIN_API_URL + "/posts"
  const response = await fetch(postsApiUrl)

  return response.json()
}

function App() {
  const queryClient = useQueryClient()

  const [count, setCount] = useState(0)

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 10000
  })

  return (
    <>
      <div className="container mx-auto px-4">
        <h1>React Blog 1</h1>

        <PostForm />
          {posts?.map((post, key) => {
            return(
              <div key={key}>
                {post.title}
              </div>
            )
          })}
      </div>
    </>
  )
}

export default App
