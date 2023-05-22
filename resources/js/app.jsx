import React from 'react'
import ReactDOM from 'react-dom/client'
import.meta.glob([
    '../images/**',
    '../fonts/**',
]);

import App from './views/App'

ReactDOM.createRoot(document.getElementById('app')).render (
    <App />
)