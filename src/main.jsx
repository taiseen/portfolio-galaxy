import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './styles/index.css'


const htmlRoot = document.getElementById('root');
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
