import NavBar from '../components/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <hr />
      <TanStackRouterDevtools />
    </>
  ),
})