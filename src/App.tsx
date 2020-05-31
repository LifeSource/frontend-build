import React from 'react'
import { render } from 'react-dom'

import Icon from './public/images/mandarin-oranges.jpg'

const App = (): React.ReactElement => {
  return (
    <div>
      Hello
      <p>
        This is a long Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Minima nam numquam voluptates architecto eos consequuntur atque illo
        quam. Vitae tempora inventore non atque! Incidunt aspernatur, similique
        beatae iusto culpa a.
      </p>
      <img src={Icon} width={1000} />
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
