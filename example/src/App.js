import React from 'react'
import { useMyHook } from 'use-random-quote'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App