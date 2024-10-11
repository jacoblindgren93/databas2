import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/router/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	   <div className='w-screen min-h-screen bg-neutral-200 flex flex-row'>
			<Router />
	   </div>
  </StrictMode>,
)
