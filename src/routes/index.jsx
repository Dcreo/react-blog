import { createFileRoute } from '@tanstack/react-router'
import Posts from "@components/posts/Posts"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div>
      <Posts />
    </div>
  )
}
