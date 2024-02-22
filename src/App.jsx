import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { Contacts } from './pages/Contacts'
import { RootLayout } from './pages/Root'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetails } from './pages/ProjectDetails'
import { DarkModeProvider } from './components/DarkmodeContext'

// const router = createBrowserRouter([
//   {
//     path: '/', element: <RootLayout />, children: [
//       { index: true, element: <Home /> },
//       {
//         path: '/projects', element: <ProjectsPage /> 
//       },
//       {
//         path: '/zbab', element: <ProjectDetails />
//       },
//       { path: '/skills', element: <Skills /> },
//       { path: '/contacts', element: <Contacts /> }
//     ]
//   },
// ])


export const App = () => {


  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='/projects'>
              <Route index element={<ProjectsPage />} />
              <Route path=':id' element={<ProjectDetails />} />
            </Route>
            <Route path='/skills' element={<Skills />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}