import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navigation } from "@widgets/Navigation"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Navigation />
        <Outlet />
      </div>
    </React.Fragment>
  )
}
