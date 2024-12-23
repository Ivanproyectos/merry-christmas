import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import { Home } from './pages/home/Home'

createRoot(document.getElementById('root')!).render(
    <Home />
)
