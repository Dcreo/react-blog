import { createFileRoute } from '@tanstack/react-router'
import { PostPage } from "@pages/PostPage";

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()

  return(
    <div>
      <PostPage id={postId} />
    </div>
  )
}
