import { motion } from 'framer-motion'
import { Brain, Code2, Database, GitBranch, Layers, ShieldCheck, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const sections = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'C++'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React', 'Node.js', 'Express.js', 'Flutter', 'Electron.js', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['MySQL', 'SQLite', 'Git & GitHub', 'PDF Reports'],
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    skills: ['Problem Solving', 'System Thinking', 'Client Communication', 'Debugging', 'Planning', 'Fast Learning'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-block skills-section pharaoh-pattern">
      <div className="content-wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="section-kicker centered">المهارات</p>
          <h2 className="section-title centered">تقنيات أستخدمها لبناء أنظمة مستقرة</h2>
          <span className="section-rule centered-rule" />
        </motion.div>

        <div className="skill-sections">
          {sections.map((section) => {
            const Icon = section.icon

            return (
              <motion.article
                key={section.title}
                className="skill-group"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.16 }}
              >
                <div className="skill-group-head">
                  <Icon size={30} />
                  <h3>{section.title}</h3>
                </div>

                <motion.div className="skill-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  {section.skills.map((skill) => (
                    <motion.div
                      className="skill-card"
                      key={skill}
                      variants={fadeUp}
                      whileHover={{ y: -8, scale: 1.015 }}
                    >
                      <span className="gold-ornament" aria-hidden="true">
                        𓋹
                      </span>
                      <Sparkles size={24} />
                      <h4>{skill}</h4>
                      <p>Professional workflow</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.article>
            )
          })}
        </div>

        <div className="skill-note">
          <ShieldCheck size={20} />
          <span>كل مهارة هنا مرتبطة بتسليم منتج عملي، وليس مجرد قائمة تقنيات.</span>
          <GitBranch size={20} />
        </div>
      </div>
    </section>
  )
}
