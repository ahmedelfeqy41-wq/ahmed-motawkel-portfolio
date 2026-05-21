import { Brain, Code2, Database, GitBranch, Layers, ShieldCheck, Sparkles } from 'lucide-react'

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
        <p className="section-kicker centered">المهارات</p>
        <h2 className="section-title centered">تقنيات أستخدمها لبناء أنظمة مستقرة</h2>
        <span className="section-rule centered-rule" />

        <div className="skill-sections">
          {sections.map((section) => {
            const Icon = section.icon

            return (
              <article key={section.title} className="skill-group">
                <div className="skill-group-head">
                  <Icon size={30} />
                  <h3>{section.title}</h3>
                </div>

                <div className="skill-grid">
                  {section.skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                      <span className="gold-ornament" aria-hidden="true">
                        ◆
                      </span>
                      <Sparkles size={24} />
                      <h4>{skill}</h4>
                      <p>Professional workflow</p>
                    </div>
                  ))}
                </div>
              </article>
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
