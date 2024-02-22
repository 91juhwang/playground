import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/calendar')({
  component: () => <div>Hello /calendar!</div>
})