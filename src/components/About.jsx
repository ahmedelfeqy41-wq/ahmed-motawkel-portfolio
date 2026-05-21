import { motion } from 'framer-motion'
import { Brain, Bug, Layers, Rocket, ShieldCheck, Sparkles } from 'lucide-react'

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
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const papyrusCards = [
  {
    title: 'حلول أعمال عملية',
    text: 'أحوّل احتياجات ERP و POS والمخزون والفواتير إلى شاشات واضحة وسريعة الاستخدام.',
    icon: Layers,
  },
  {
    title: 'أداء وتجربة مستخدم',
    text: 'أهتم بسرعة الواجهة، وضوح التدفق، وتقليل التعقيد اليومي على المستخدم النهائي.',
    icon: Rocket,
  },
  {
    title: 'كود قابل للصيانة',
    text: 'أبني بنية منظمة تساعد على التطوير المستمر وإصلاح الأخطاء بثقة.',
    icon: ShieldCheck,
  },
]

const strengths = [
  { title: 'Problem Solving', icon: Brain },
  { title: 'Clean Architecture', icon: Layers },
  { title: 'Fast Delivery', icon: Rocket },
  { title: 'Bug Fixing', icon: Bug },
]

export default function About() {
  return (
    <section id="about" className="section-block about-section">
      <div className="content-wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="section-kicker">نبذة</p>
          <h2 className="section-title">أبني تجارب رقمية عملية واحترافية</h2>
          <span className="section-rule" />
        </motion.div>

        <div className="about-layout">
          <motion.aside
            className="about-portrait-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="about-image-frame">
              {personalImage ? (
                <img src={personalImage} alt="Ahmed Motawkel" loading="lazy" />
              ) : (
                <div className="portrait-placeholder">AM</div>
              )}
            </div>
            <div>
              <h3>Ahmed Motawkel</h3>
              <p>IT Manager & Full Stack Developer</p>
            </div>
          </motion.aside>

          <div className="about-copy">
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              أنا مطور برمجيات أركز على بناء أنظمة أعمال حقيقية: ERP، POS، تطبيقات سطح
              المكتب، لوحات التحكم، التقارير، وإدارة البيانات بشكل واضح وآمن.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              هدفي أن يكون المنتج سريعًا، مفهومًا، وسهل التشغيل داخل بيئة العمل اليومية،
              مع اهتمام خاص بتفاصيل الفواتير، الصلاحيات، البحث، التصدير، وتجربة العميل.
            </motion.p>

            <motion.div
              className="papyrus-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {papyrusCards.map((card) => {
                const Icon = card.icon

                return (
                  <motion.article className="papyrus-card" key={card.title} variants={fadeUp}>
                    <Icon size={28} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="strength-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {strengths.map((item) => {
            const Icon = item.icon

            return (
              <motion.div className="strength-card" key={item.title} variants={fadeUp}>
                <span>{item.title}</span>
                <Icon size={30} />
              </motion.div>
            )
          })}
        </motion.div>

        <div className="about-note">
          <Sparkles size={20} />
          <span>تصميم هادئ بطابع فرعوني حديث، لكن الأولوية دائمًا للوضوح والاحتراف.</span>
        </div>
      </div>
    </section>
  )
}
