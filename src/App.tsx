import React from 'react'
import { render } from 'react-dom'

import Icon from './public/images/image001.png'

const icon = new Image()
console.log('Icon: ', Icon)

const App = () => {
  return (
    <div>
      Hello
      <img src={Icon} />
    </div>
  )
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

console.log('Added console.')

export default App
