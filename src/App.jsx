import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PostForm from '@src/admin/posts/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container mx-auto px-4">
        <h1>React Blog 1</h1>

        <PostForm />
      </div>
    </>
  )
}

export default App
