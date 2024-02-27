import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen' // Import the generated route tree
import './index.css'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Start MSW server
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

// Create a new router instance
const router = createRouter({ routeTree })

// Render the app
const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}