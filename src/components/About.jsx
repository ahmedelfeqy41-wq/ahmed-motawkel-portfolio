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
        <p className="section-kicker">نبذة</p>
        <h2 className="section-title">أبني تجارب رقمية عملية واحترافية</h2>
        <span className="section-rule" />

        <div className="about-layout">
          <aside className="about-portrait-card">
            <div className="about-image-frame">
              {personalImage ? (
                <img src={personalImage} alt="Ahmed Motawkel" />
              ) : (
                <div className="portrait-placeholder">AM</div>
              )}
            </div>
            <div>
              <h3>Ahmed Motawkel</h3>
              <p>Full Stack & Desktop App Developer</p>
            </div>
          </aside>

          <div className="about-copy">
            <p>
              أنا مطور برمجيات أركز على بناء أنظمة أعمال حقيقية: ERP، POS، تطبيقات سطح
              المكتب، لوحات التحكم، التقارير، وإدارة البيانات بشكل واضح وآمن.
            </p>
            <p>
              هدفي أن يكون المنتج سريعًا، مفهومًا، وسهل التشغيل داخل بيئة العمل اليومية،
              مع اهتمام خاص بتفاصيل الفواتير، الصلاحيات، البحث، التصدير، وتجربة العميل.
            </p>

            <div className="papyrus-grid">
              {papyrusCards.map((card) => {
                const Icon = card.icon

                return (
                  <article className="papyrus-card" key={card.title}>
                    <Icon size={28} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="strength-grid">
          {strengths.map((item) => {
            const Icon = item.icon

            return (
              <div className="strength-card" key={item.title}>
                <span>{item.title}</span>
                <Icon size={30} />
              </div>
            )
          })}
        </div>

        <div className="about-note">
          <Sparkles size={20} />
          <span>تصميم هادئ بطابع فرعوني حديث، لكن الأولوية دائمًا للوضوح والاحتراف.</span>
        </div>
      </div>
    </section>
  )
}
