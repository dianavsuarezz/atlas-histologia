import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import SystemPage from './pages/SystemPage'
import Layout from './components/Layout'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sistema/:systemId" element={<SystemPage />} />
          <Route path="/sistema/:systemId/:laminaId" element={<SystemPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
