import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Layers, Microscope } from 'lucide-react'
import { systems } from '../data/histologyData'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const SystemCard = ({ system, index }) => {
  return (
    <motion.div variants={cardVariants}>
      <Link to={`/sistema/${system.id}`} className="group block">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-white card-shadow border border-slate-100/80 p-6 h-full transition-all duration-300"
          whileHover={{
            y: -4,
            boxShadow: '0 8px 30px rgba(0,0,0,0.09), 0 20px 50px rgba(0,0,0,0.06)',
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Gradient accent top bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${system.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
          />

          {/* Background glow */}
          <div
            className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
            style={{ background: system.softColor.replace('0.10', '0.5') }}
          />

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm border"
              style={{ backgroundColor: system.softColor, borderColor: system.borderColor }}
            >
              {system.icon}
            </div>
            <motion.div
              className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ backgroundColor: system.softColor }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight size={12} style={{ color: system.accentColor }} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-slate-800 text-base leading-snug group-hover:text-slate-900 transition-colors">
              {system.name}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
              {system.description}
            </p>
          </div>

          {/* Footer meta */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Layers size={11} className="text-slate-300" />
              <span className="text-xs text-slate-300 font-mono">
                {system.laminas.length} láminas
              </span>
            </div>
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
              style={{ color: system.accentColor, backgroundColor: system.softColor, borderColor: system.borderColor }}
            >
              Ver sistema →
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

const HomePage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
      className="min-h-full"
    >
      {/* Hero Section */}
      <motion.section
        variants={heroVariants}
        className="max-w-7xl mx-auto px-6 pt-16 pb-12"
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5 mb-6 shadow-sm">
            <Microscope size={12} className="text-rose-400" />
            <span className="text-xs text-slate-500 font-medium tracking-wide">
              Cátedra de Histología y Embriología · UCV
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-4">
            Atlas Interactivo de{' '}
            <span className="gradient-text italic">Histología</span>
          </h1>

          <p className="text-slate-400 text-base leading-relaxed max-w-lg">
            Explora la microanatomía del cuerpo humano a través de láminas histológicas de alta resolución,
            con descripciones estructurales y funcionales detalladas.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-100">
          {[
            { value: systems.length, label: 'Sistemas' },
            { value: systems.reduce((acc, s) => acc + s.laminas.length, 0), label: 'Láminas' },
            { value: '5', label: 'Aparatos' },
          ].map(stat => (
            <div key={stat.label} className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-semibold text-slate-800">{stat.value}</span>
              <span className="text-xs text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {systems.map((system, index) => (
            <SystemCard key={system.id} system={system} index={index} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  )
}

export default HomePage
