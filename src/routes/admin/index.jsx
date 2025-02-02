import { createFileRoute } from "@tanstack/react-router"
import PostForm from "@components/admin/posts/form"

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div>
      <PostForm />
    </div>
  )
}
