import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Microscope, ChevronLeft } from 'lucide-react'

const Footer = () => (
  <footer className="w-full py-10 mt-auto border-t border-slate-100">
    <div className="max-w-4xl mx-auto px-6 text-center space-y-1">
      <p className="text-xs font-medium text-slate-500 tracking-wide">Universidad Central de Venezuela</p>
      <p className="text-xs text-slate-400">Facultad de Medicina</p>
      <p className="text-xs text-slate-400">Escuela de Medicina "Luis Razetti"</p>
      <p className="text-xs text-slate-400">Cátedra de Histología y Embriología</p>
      <div className="pt-3 space-y-0.5">
        <p className="text-xs font-medium text-slate-500">Dr. Alfonso Leal Trejo</p>
        <p className="text-xs text-slate-400">Diana Virginia Suárez Ramos</p>
        <p className="text-xs text-slate-400">Stephanie Sofía Salazar Rodríguez</p>
        <p className="text-xs text-slate-400">Julieth Alicia Torres Torres</p>
      </div>
    </div>
  </footer>
)

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-white/60">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-rose-400 to-violet-500 flex items-center justify-center shadow-sm">
            <Microscope size={14} className="text-white" />
          </div>
          <span className="font-display font-semibold text-sm text-slate-700 tracking-tight group-hover:text-slate-900 transition-colors">
            Atlas de Histología
          </span>
        </Link>

        {!isHome && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-500 transition-colors font-medium"
            >
              <ChevronLeft size={14} />
              Índice
            </Link>
          </motion.div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 font-mono">UCV · 2025</span>
        </div>
      </div>
    </header>
  )
}

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col mesh-bg">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
