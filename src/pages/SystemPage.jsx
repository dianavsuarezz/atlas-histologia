import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronRight, Layers, FlaskConical, Zap, BookOpen, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react'
import { getSystemById } from '../data/histologyData'
import HistoImage from '../components/ImagePlaceholder'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
}

const contentVariants = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.25 } }
}

const InfoCard = ({ icon: Icon, label, text, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white rounded-2xl p-5 card-shadow border border-slate-100/80"
  >
    <div className="flex items-start gap-3">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: color + '18', border: `1px solid ${color}30` }}
      >
        <Icon size={14} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">{label}</h4>
        <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
      </div>
    </div>
  </motion.div>
)

const SystemPage = () => {
  const { systemId, laminaId } = useParams()
  const navigate = useNavigate()

  const system = getSystemById(systemId)

  // Determine active lamina
  const [activeLaminaIndex, setActiveLaminaIndex] = useState(0)

  useEffect(() => {
    if (laminaId && system) {
      const idx = system.laminas.findIndex(l => l.id === laminaId)
      if (idx !== -1) setActiveLaminaIndex(idx)
    } else {
      setActiveLaminaIndex(0)
    }
  }, [laminaId, system])

  if (!system) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-3">Sistema no encontrado.</p>
          <Link to="/" className="text-rose-400 text-xs hover:underline">← Volver al índice</Link>
        </div>
      </div>
    )
  }

  const activelamina = system.laminas[activeLaminaIndex]

  const goToLamina = (index) => {
    setActiveLaminaIndex(index)
    navigate(`/sistema/${system.id}/${system.laminas[index].id}`, { replace: true })
  }

  const prev = () => activeLaminaIndex > 0 && goToLamina(activeLaminaIndex - 1)
  const next = () => activeLaminaIndex < system.laminas.length - 1 && goToLamina(activeLaminaIndex + 1)

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-8"
    >
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
        <Link to="/" className="hover:text-slate-600 transition-colors">Atlas</Link>
        <ChevronRight size={11} />
        <span style={{ color: system.accentColor }} className="font-medium">{system.name}</span>
      </nav>

      {/* System header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border"
            style={{ backgroundColor: system.softColor, borderColor: system.borderColor }}
          >
            {system.icon}
          </div>
          <div>
            <h1 className="font-display font-semibold text-xl text-slate-900">{system.name}</h1>
            <p className="text-xs text-slate-400">{system.laminas.length} láminas histológicas</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar — Lamina list */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="bg-white rounded-2xl card-shadow border border-slate-100/80 overflow-hidden">
            <div
              className="px-4 py-3 border-b"
              style={{ borderColor: system.borderColor, backgroundColor: system.softColor }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: system.accentColor }}>
                Láminas
              </p>
            </div>
            <nav className="p-2">
              {system.laminas.map((lamina, idx) => (
                <motion.button
                  key={lamina.id}
                  onClick={() => goToLamina(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all duration-200 flex items-center gap-2 mb-0.5 ${
                    idx === activeLaminaIndex
                      ? 'font-medium'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                  style={
                    idx === activeLaminaIndex
                      ? {
                          color: system.accentColor,
                          backgroundColor: system.softColor,
                        }
                      : {}
                  }
                  whileHover={{ x: idx === activeLaminaIndex ? 0 : 2 }}
                  transition={{ duration: 0.15 }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: idx === activeLaminaIndex ? system.accentColor : '#cbd5e1'
                    }}
                  />
                  <span className="leading-snug">{lamina.nombre}</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activelamina.id}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Lamina title */}
              <div className="mb-5">
                <h2 className="font-display font-semibold text-2xl text-slate-900 mb-1">
                  {activelamina.nombre}
                </h2>
                <div className="flex items-center gap-2">
                  <div
                    className="h-0.5 w-10 rounded-full bg-gradient-to-r"
                    style={{ background: `linear-gradient(to right, ${system.accentColor}, transparent)` }}
                  />
                  <span className="text-xs font-mono text-slate-300">
                    {activeLaminaIndex + 1} / {system.laminas.length}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 mb-6 card-shadow">
                <HistoImage
                  src={activelamina.imagen}
                  alt={activelamina.nombre}
                  className="w-full rounded-2xl"
                  aspectRatio="16/10"
                />
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 gap-4">
                <InfoCard
                  icon={BookOpen}
                  label="Órgano / Lámina"
                  text={activelamina.nombre}
                  color={system.accentColor}
                  delay={0.05}
                />
                <InfoCard
                  icon={Layers}
                  label="Estructura Histológica"
                  text={activelamina.estructura}
                  color={system.accentColor}
                  delay={0.1}
                />
                <InfoCard
                  icon={Zap}
                  label="Función"
                  text={activelamina.funcion}
                  color={system.accentColor}
                  delay={0.15}
                />
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                <motion.button
                  onClick={prev}
                  disabled={activeLaminaIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-500 hover:border-slate-300 hover:text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 bg-white"
                  whileHover={activeLaminaIndex > 0 ? { x: -2 } : {}}
                >
                  <ChevronLeft size={13} />
                  Anterior
                </motion.button>

                <span className="text-xs text-slate-300 font-mono">
                  {activeLaminaIndex + 1} de {system.laminas.length}
                </span>

                <motion.button
                  onClick={next}
                  disabled={activeLaminaIndex === system.laminas.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                  style={{ background: `linear-gradient(135deg, ${system.accentColor}dd, ${system.accentColor})` }}
                  whileHover={activeLaminaIndex < system.laminas.length - 1 ? { x: 2 } : {}}
                >
                  Siguiente
                  <ChevronRightIcon size={13} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default SystemPage
