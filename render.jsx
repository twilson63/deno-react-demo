import React from 'react'
import server from 'react-dom/server'
import { App } from './components/App.jsx'
import { DataProvider } from './components/data.jsx'

let assets = {
  'client.js': '/scripts/client.js'
}

export default function (url, res) {
  const data = createServerData()

  const html = server.renderToString(
    <App assets={assets} />
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
        }, 5000);
      });
      throw promise;
    },
  };
}