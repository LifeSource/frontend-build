import App from './App'
import './styles/styles.scss'
import { listProduct } from './product'

listProduct({ name: 'A4 exercise book', cost: 2.5 })
console.log(App)

if (module && module.hot) {
  module.hot.accept()
}
