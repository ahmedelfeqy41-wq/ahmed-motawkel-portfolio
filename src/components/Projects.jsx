import { ExternalLink, FolderKanban, GitBranch, Globe, Layers } from 'lucide-react'

const victoriaImages = Object.values(
  import.meta.glob('../assets/victoria/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  }),
)

const atelierImages = Object.values(
  import.meta.glob('../assets/atelier/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  }),
)

const atelierFallbackImages = Object.values(
  import.meta.glob('../assets/atteleh/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  }),
)

const atelierGallery = atelierImages.length ? atelierImages : atelierFallbackImages

const projects = [
  {
    name: 'Victoria Dairy Website',
    description:
      'موقع إلكتروني احترافي لشركة Victoria Dairy يعرض الهوية التجارية والخدمات والمنتجات بشكل منظم وجذاب.',
    tech: ['WordPress', 'Web Design', 'UI/UX', 'Hosting', 'SSL'],
    image: victoriaImages[0] || null,
    gallery: victoriaImages,
    icon: Globe,
  },
  {
    name: 'Atelier Dress Rental & Sales Management System',
    description:
      'نظام متكامل لإدارة تأجير وبيع الفساتين، المخزون، الفواتير، المصروفات، الموردين، العملاء، والتقارير.',
    tech: ['Flutter', 'SQLite', 'MySQL', 'Node.js', 'Express', 'PDF Reports'],
    image: atelierGallery[0] || null,
    gallery: atelierGallery,
    icon: Layers,
  },
  {
    name: 'POS Cafe Management System',
    description:
      'نظام نقاط بيع للكافيهات يدير الطلبات، المنتجات، المستخدمين، الصلاحيات، المبيعات اليومية، وتقارير التشغيل.',
    tech: ['React', 'Node.js', 'MySQL', 'POS', 'Reports'],
    image: null,
    gallery: [],
    icon: FolderKanban,
  },
  {
    name: 'HR Attendance & Payroll System',
    description:
      'نظام موارد بشرية للحضور والانصراف، الورديات، التأخيرات، الإضافي، الرواتب، وربط أجهزة البصمة.',
    tech: ['Flutter', 'MySQL', 'Node.js', 'Payroll', 'Attendance'],
    image: null,
    gallery: [],
    icon: GitBranch,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-block projects-section">
      <div className="content-wrap">
        <p className="section-kicker centered">المشاريع</p>
        <h2 className="section-title centered">مشاريع حقيقية بتقديم احترافي</h2>
        <span className="section-rule centered-rule" />
        <p className="section-lead">
          نماذج من مواقع وأنظمة أعمال تم تصميمها لتكون واضحة، قابلة للتوسع، ومناسبة
          للاستخدام اليومي.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.icon
            const gallery = project.gallery.slice(0, 4)

            return (
              <article className="project-card" key={project.name}>
                <div className="project-media">
                  {project.image ? (
                    <img src={project.image} alt={project.name} />
                  ) : (
                    <div className="project-placeholder">
                      <Icon size={54} />
                      <span>AM</span>
                    </div>
                  )}
                  <div className="project-overlay" />
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {gallery.length > 1 && (
                  <div className="project-gallery" aria-label={`${project.name} gallery`}>
                    {gallery.map((image, imageIndex) => (
                      <img src={image} alt={`${project.name} preview ${imageIndex + 1}`} key={image} />
                    ))}
                  </div>
                )}

                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href="#contact" className="primary-button small-button">
                      Live Demo
                      <ExternalLink size={17} />
                    </a>
                    <a href="#contact" className="secondary-button small-button">
                      Source Code
                      <GitBranch size={17} />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
