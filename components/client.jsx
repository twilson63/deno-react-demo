import React from 'react'
import { hydrateRoot } from 'react-dom'
import { App } from './App.jsx'

//ReactDOM.render(<App />, document.getElementById('app'))

//const root = ReactDOM.createRoot(document.getElementById('app'))
//root.render(<App />)
hydrateRoot(document, <App assets={window.assetManifest} />) 
