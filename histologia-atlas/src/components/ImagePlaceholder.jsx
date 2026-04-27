import { ImageIcon } from 'lucide-react'

const ImagePlaceholder = ({ src, alt, className = '', aspectRatio = '4/3' }) => {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Placeholder UI */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        {/* Icon */}
        <div className="relative z-10 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center">
          <ImageIcon size={22} className="text-slate-300" />
        </div>
        {/* Path hint */}
        <div className="relative z-10 text-center">
          <p className="text-xs font-mono text-slate-400 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80 leading-relaxed">
            {src}
          </p>
          <p className="text-[10px] text-slate-300 mt-2">
            Coloca tu imagen en <span className="font-mono text-slate-400">public/assets/</span>
          </p>
        </div>
      </div>

      {/* Corner dots decoration */}
      <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
      <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
    </div>
  )
}

/**
 * Smart image: shows the real image if it loads, placeholder otherwise.
 */
const HistoImage = ({ src, alt, className = '', aspectRatio = '4/3' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextSibling.style.display = 'flex'
        }}
      />
      {/* Fallback placeholder (hidden by default, shown on error) */}
      <div
        className="absolute inset-0 hidden flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-slate-50 to-slate-100"
        style={{ display: 'none' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="relative z-10 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center">
          <ImageIcon size={22} className="text-slate-300" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-xs font-mono text-slate-400 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80 break-all">
            {src}
          </p>
        </div>
        <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200" />
      </div>
    </div>
  )
}

export { ImagePlaceholder, HistoImage }
export default HistoImage
