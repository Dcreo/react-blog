import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostForm from '@src/admin/posts/form'

function App() {
  const [count, setCount] = useState(0)

  const onCreatePost = (post) => {
    console.warn("Post created", post)
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <h1>React Blog 1</h1>

        <PostForm onCreatePost={onCreatePost} />
      </div>
    </>
  )
}

export default App
