import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/router/router.tsx'
import {MenuItemDisplayProvider} from './providers/dishes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	   <div className='w-screen min-h-screen bg-neutral-200 flex flex-row'>
		 	<MenuItemDisplayProvider>
				<Router />
			</MenuItemDisplayProvider>
	   </div>
  </StrictMode>,
)
