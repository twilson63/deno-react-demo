import React from 'react'
import { hydrateRoot } from 'react-dom'
import { App } from './App.jsx'

hydrateRoot(document,
  <App assets={window.assetManifest} />)