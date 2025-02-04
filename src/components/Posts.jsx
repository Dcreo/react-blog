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
    <div className="flex flex-col gap-y-[10px]">
      {posts?.map((post, key) => {
        return(
          <div key={key} className="border-1 border-gray-400 p-[20px] text-bold text-[24px]">
            {post.title}
          </div>
        )
      })}
    </div>
  )
}
