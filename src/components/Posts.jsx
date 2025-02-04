import { useEffect } from "react"
import { useQuery, useQueryClient } from 'react-query'
import { useSearchStore } from "@store/search"

const getPosts = async ({ params }) => {
  // TODO URLS to Constants

  if Object.keys(params).length {
    paramsURL = new URLSearchParams(params)
  }

  const postsApiUrl = import.meta.env.VITE_BACKEND_ADMIN_API_URL + "/posts"
  const response = await fetch(postsApiUrl)

  return response.json()
}

export default function Posts() {
  const queryClient = useQueryClient()
  const searchQuery = useSearchStore((state) => state.query)

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 10000
  })

  useEffect(() => {
    console.warn(searchQuery)
  }, [searchQuery])

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
