import { motion } from 'framer-motion'
import { ExternalLink, Mail, Rocket, ShieldCheck, Terminal } from 'lucide-react'

const meFolderImages = Object.values(
  import.meta.glob('../assets/me/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  }),
)

const meRootImages = Object.values(
  import.meta.glob('../assets/me.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  }),
)

const personalImage = meFolderImages[0] || meRootImages[0] || null

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.68, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.72, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="hero-section pharaoh-pattern">
      <div className="floating-glyph glyph-one">𓂀</div>
      <div className="floating-glyph glyph-two">𓋹</div>
      <div className="floating-glyph glyph-three">𓆣</div>

      <div className="hero-inner">
        <motion.div className="hero-copy" variants={fadeUp} initial="hidden" animate="show">
          <div className="section-kicker hero-kicker">
            <SparkleMark />
            Portfolio Premium
          </div>

          <div className="cartouche-badge" aria-label="Ahmed Motawkel initials">
            <span>AM</span>
          </div>

          <p className="hieroglyphic-name" aria-label="Ahmed Motawkel in hieroglyphic style">
            𓄿𓎛𓅓𓂧 𓅓𓏏𓅱𓎡𓃭
          </p>

          <h1>Ahmed Motawkel</h1>
          <h2>IT Manager & Full Stack Developer</h2>
          <p className="hero-description">
            أقوم بتطوير أنظمة ERP و POS وتطبيقات سطح المكتب والمواقع الحديثة، مع التركيز
            على الأداء، سهولة الاستخدام، وتجربة العميل.
          </p>

          <div className="hero-actions">
            <motion.a href="#projects" className="primary-button" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              استعرض المشاريع
              <ExternalLink size={20} />
            </motion.a>
            <motion.a href="#contact" className="secondary-button" whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              تواصل معي
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.aside className="profile-feature" variants={scaleIn} initial="hidden" animate="show">
          <div className="portrait-frame">
            <div className="portrait-ornament" aria-hidden="true" />
            {personalImage ? (
              <img src={personalImage} alt="Ahmed Motawkel" loading="eager" />
            ) : (
              <div className="portrait-placeholder">AM</div>
            )}
          </div>

          <motion.div className="terminal-card stone-tablet" variants={fadeUp}>
            <div className="terminal-top">
              <span>Freelance Status</span>
              <Terminal size={18} />
            </div>
            <div className="terminal-body">
              <Rocket size={20} />
              <span>Available for Freelance Work</span>
            </div>
          </motion.div>

          <div className="trust-strip">
            <ShieldCheck size={18} />
            حلول أعمال مستقرة، واجهات نظيفة، وتسليم احترافي.
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

function SparkleMark() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 1.8 12.2 7.8 18.2 10 12.2 12.2 10 18.2 7.8 12.2 1.8 10 7.8 7.8 10 1.8Z" />
    </svg>
  )
}
