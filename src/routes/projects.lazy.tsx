import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/projects')({
  component: () => Projects(),
})

function Projects() {
  return (
    <div className="p-2">
      <h3>hello Projects!</h3>
    </div>
  )
}