import { createFileRoute } from '@tanstack/react-router'
import SignUp from "@components/auth/signup"

export const Route = createFileRoute('/auth/signup/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><SignUp /></div>
}
