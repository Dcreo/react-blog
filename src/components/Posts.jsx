import { useQuery, useQueryClient } from 'react-query'

const getPosts = async () => {
  // TODO URLS to Constants
  const postsApiUrl = import.meta.env.VITE_BACKEND_ADMIN_API_URL + "/posts"
  const response = await fetch(postsApiUrl)

  return response.json()
}

export default function Posts() {
  const queryClient = useQueryClient()

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 10000
  })

  return(
    <div>
      {posts?.map((post, key) => {
        return(
          <div key={key}>
            {post.title}
          </div>
        )
      })}
    </div>
  )
}
