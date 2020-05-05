import React from 'react'
import { render } from 'react-dom'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'
import configureStrore from './store'

const store = configureStrore()

render(<React.StrictMode><App store={store} /></React.StrictMode>, document.getElementById('app'))