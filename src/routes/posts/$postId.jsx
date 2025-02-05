import { createFileRoute } from '@tanstack/react-router'
import Post from "@components/posts/Post"

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()

  return(
    <div>
      <Post id={postId} />
    </div>
  )
}
