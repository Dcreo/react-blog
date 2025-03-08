import { useQuery, useQueryClient } from 'react-query'
import Comments from "@components/comments/Comments"

const getPost = async (id) => {
  // TODO URLS to Constants
  console.warn('request')
  const postApiUrl = import.meta.env.VITE_BACKEND_ADMIN_API_URL + "/posts/" + id
  const response = await fetch(postApiUrl)

  return response.json()
}

export const PostPage = ({ id }) => {
  const queryClient = useQueryClient()

  const { data: post } = useQuery({
    queryKey: ['post'],
    // TODO serializers for camelCase to snakeCase
    queryFn: () => getPost(id)
  })

  // TODO load data progress

  return(
    <div>
      <h1>{ post?.title }</h1>
      <div>
        {post?.content}
      </div>
      <Comments />
    </div>
  )
}
