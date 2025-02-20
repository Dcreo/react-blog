import { createFileRoute } from '@tanstack/react-router'
import SignIn from '@components/auth/signin'

export const Route = createFileRoute('/auth/signin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <SignIn />
    </div>
  )
}
