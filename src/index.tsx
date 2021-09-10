import ReactDOM from 'react-dom'
import './styling/css/index.css'
import Application from './application/application'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Application />
  </BrowserRouter>
  , document.getElementById('root')
)
