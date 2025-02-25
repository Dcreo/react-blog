import { useEffect } from "react"
import { Link } from '@tanstack/react-router'
import { useQuery, useQueryClient } from 'react-query'
import { useSearchStore } from "@app/store"
import { compactObject } from "@shared/lib"

const getPosts = async (params = {}) => {
  // TODO URLS to Constants
  let postsApiUrl = import.meta.env.VITE_BACKEND_ADMIN_API_URL + "/posts"

  console.warn("work", compactObject(params))
  if (Object.keys(params).length) {
    let paramsURL = new URLSearchParams(params)
    postsApiUrl = `${postsApiUrl}/?${paramsURL}`.toString()
  }

  console.warn(postsApiUrl)
  const response = await fetch(postsApiUrl)

  return response.json()
}

export default function Posts() {
  const queryClient = useQueryClient()
  const searchQuery = useSearchStore((state) => state.query)

  const { data: posts, refetch } = useQuery({
    queryKey: ['posts'],
    // TODO serializers for camelCase to snakeCase
    queryFn: () => getPosts({ search_query: searchQuery }),
    staleTime: 10000
  })

  useEffect(() => {
    refetch()
  }, [searchQuery])

  // TODO load data progress

  return(
    <div className="flex flex-col gap-y-[10px]">
      {posts?.map((post, key) => {
        return(
          <Link key={key}
                className="border-1 border-gray-400 p-[20px] text-bold text-[24px]"
                to="/posts/$postId"
                params={{ postId: post.id }}
          >
            {post.title}
          </Link>
        )
      })}
    </div>
  )
}
