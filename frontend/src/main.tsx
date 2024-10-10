import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	   <div className='w-screen min-h-screen bg-neutral-100 flex flex-row'>
			<App />
	   </div>
  </StrictMode>,
)
