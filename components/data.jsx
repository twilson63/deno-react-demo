import React from 'react'

const { createContext, useContext } = React

const DataContext = createContext(null)

export function DataProvider({ children, data }) {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

const fakeData = [
  'one', 'two', 'three'
]

export function useData() {
  const ctx = useContext(DataContext)
  if (ctx !== null) {
    ctx.read()
  }
  return fakeData
}