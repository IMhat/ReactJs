import React from 'react'
import getFirestoreApp from './firebase/config'
import ReactDOM from 'react-dom/client'

import App from './App'


getFirestoreApp()


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
  
 
