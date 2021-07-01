import React from 'react'
import server from 'react-dom/server'
import { App } from './components/App.jsx'
import { DataProvider } from './components/data.jsx'

let assets = {
  'client.js': '/scripts/client.js'
}

export default function render(url, res) {
  const data = createServerData()

  const html = server.renderToString(
    <DataProvider data={data}>
      <App assets={assets} />
    </DataProvider>
  )
  res.send(html)
}

function createServerData() {
  let done = false;
  let promise = null;
  return {
    read() {
      if (done) {
        return;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise(resolve => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, 2000);
      });
      throw promise;
    },
  };
}