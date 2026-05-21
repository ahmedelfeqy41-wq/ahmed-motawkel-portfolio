import { motion } from 'framer-motion'
import { GitBranch, Globe, Mail, Phone, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const contacts = [
  {
    label: 'Email',
    value: 'ahmedelfeqy41@gmail.com',
    href: 'mailto:ahmedelfeqy41@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: '01096730797',
    href: 'https://wa.me/201096730797',
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'github.com/ahmedelfeqy41-wq',
    href: 'https://github.com/ahmedelfeqy41-wq',
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmed-elfeqy',
    href: 'https://www.linkedin.com/in/ahmed-elfeqy',
    icon: Globe,
  },
  {
    label: 'Facebook',
    value: 'facebook.com/share/18pZqLGw4V',
    href: 'https://www.facebook.com/share/18pZqLGw4V/?mibextid=wwXIfr',
    icon: Globe,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-block contact-section pharaoh-pattern">
      <div className="content-wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="section-kicker centered">تواصل</p>
          <h2 className="section-title centered">جاهز لبناء نظامك القادم</h2>
          <span className="section-rule centered-rule" />
          <p className="section-lead">
            سواء كان المطلوب موقعًا احترافيًا، نظام ERP، تطبيق سطح مكتب، أو لوحة تحكم
            تشغيلية، يمكننا تحويل الفكرة إلى منتج واضح وقابل للاستخدام.
          </p>
        </motion.div>

        <motion.div className="contact-panel" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <div className="contact-headline">
            <Sparkles size={30} />
            <div>
              <h3>Available for freelance and business systems work</h3>
              <p>نطاق واضح، تنفيذ منظم، وتجربة استخدام مصقولة.</p>
            </div>
          </div>

          <div className="contact-grid">
            {contacts.map((item) => {
              const Icon = item.icon

              return (
                <motion.a className="contact-card" href={item.href} key={item.label} whileHover={{ y: -7 }}>
                  <Icon size={30} />
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
