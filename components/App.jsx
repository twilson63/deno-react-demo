import React from 'react'
import { Html } from './Html.jsx'

const { Suspense, lazy } = React

const LazyComponent = lazy(() => import('./LazyComponent.jsx'))


export function App({ assets }) {
  return (
    <Html assets={assets} title="React 18">
      <Content />
    </Html>
  )
}

function Content() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <h1>Hello World</h1>
    </>
  )
}