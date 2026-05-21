import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, FolderKanban, GitBranch, Globe, Images, Layers } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const victoriaImages = Object.values(
  import.meta.glob('../assets/victoria/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  }),
)

const attelehImages = Object.values(
  import.meta.glob('../assets/atteleh/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  }),
)

const projects = [
  {
    name: 'Victoria Dairy Website',
    description:
      'موقع إلكتروني احترافي لشركة Victoria Dairy يعرض الهوية التجارية والخدمات والمنتجات بشكل منظم وجذاب.',
    tech: ['WordPress', 'Web Design', 'UI/UX', 'Hosting', 'SSL'],
    images: victoriaImages,
    icon: Globe,
  },
  {
    name: 'Atelier Dress Rental & Sales Management System',
    description:
      'نظام متكامل لإدارة تأجير وبيع الفساتين، المخزون، الفواتير، المصروفات، الموردين، العملاء، والتقارير.',
    tech: ['Flutter', 'SQLite', 'MySQL', 'Node.js', 'Express', 'PDF Reports'],
    images: attelehImages,
    icon: Layers,
  },
  {
    name: 'POS Cafe Management System',
    description:
      'نظام نقاط بيع للكافيهات يدير الطلبات، المنتجات، المستخدمين، الصلاحيات، المبيعات اليومية، وتقارير التشغيل.',
    tech: ['React', 'Node.js', 'MySQL', 'POS', 'Reports'],
    images: [],
    icon: FolderKanban,
  },
  {
    name: 'HR Attendance & Payroll System',
    description:
      'نظام موارد بشرية للحضور والانصراف، الورديات، التأخيرات، الإضافي، الرواتب، وربط أجهزة البصمة.',
    tech: ['Flutter', 'MySQL', 'Node.js', 'Payroll', 'Attendance'],
    images: [],
    icon: GitBranch,
  },
]

export default function Projects() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    projectIndex: 0,
    currentIndex: 0,
  })

  const activeProject = projects[lightbox.projectIndex]
  const activeImages = activeProject?.images || []

  const openGallery = (projectIndex, imageIndex = 0) => {
    if (!projects[projectIndex].images.length) return
    setLightbox({ isOpen: true, projectIndex, currentIndex: imageIndex })
  }

  const closeGallery = useCallback(() => {
    setLightbox((current) => ({ ...current, isOpen: false }))
  }, [])

  const showNext = useCallback(() => {
    setLightbox((current) => {
      const count = projects[current.projectIndex].images.length
      return {
        ...current,
        currentIndex: count ? (current.currentIndex + 1) % count : 0,
      }
    })
  }, [])

  const showPrev = useCallback(() => {
    setLightbox((current) => {
      const count = projects[current.projectIndex].images.length
      return {
        ...current,
        currentIndex: count ? (current.currentIndex - 1 + count) % count : 0,
      }
    })
  }, [])

  const selectImage = useCallback((index) => {
    setLightbox((current) => ({ ...current, currentIndex: index }))
  }, [])

  return (
    <section id="projects" className="section-block projects-section">
      <div className="content-wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <p className="section-kicker centered">المشاريع</p>
          <h2 className="section-title centered">مشاريع حقيقية بتقديم احترافي</h2>
          <span className="section-rule centered-rule" />
          <p className="section-lead">
            نماذج من مواقع وأنظمة أعمال تم تصميمها لتكون واضحة، قابلة للتوسع، ومناسبة
            للاستخدام اليومي.
          </p>
        </motion.div>

        <motion.div
          className="project-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            const image = project.images[0] || null
            const galleryPreview = project.images

            return (
              <motion.article className="project-card" key={project.name} variants={fadeUp}>
                <div className="project-media">
                  {image ? (
                    <button
                      type="button"
                      className="project-image-button"
                      aria-label={`Open ${project.name} gallery`}
                      onClick={() => openGallery(index)}
                    >
                      <img src={image} alt={`${project.name} main preview`} loading="lazy" />
                    </button>
                  ) : (
                    <div className="project-placeholder">
                      <Icon size={54} />
                      <span>𓂀 AM</span>
                    </div>
                  )}
                  <div className="project-overlay" />
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {galleryPreview.length > 1 && (
                  <div className="project-gallery project-gallery-scroll" aria-label={`${project.name} gallery preview`}>
                    {galleryPreview.map((preview, previewIndex) => (
                      <button
                        type="button"
                        key={preview}
                        aria-label={`Open image ${previewIndex + 1} from ${project.name}`}
                        onClick={() => openGallery(index, previewIndex)}
                      >
                        <img src={preview} alt={`${project.name} preview ${previewIndex + 1}`} loading="lazy" />
                      </button>
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
                    {project.images.length > 0 && (
                      <motion.button
                        type="button"
                        className="secondary-button small-button"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openGallery(index)}
                      >
                        عرض الصور
                        <Images size={17} />
                      </motion.button>
                    )}
                    <motion.a href="#contact" className="primary-button small-button" whileHover={{ y: -3 }}>
                      Live Demo
                      <ExternalLink size={17} />
                    </motion.a>
                    <motion.a href="#contact" className="secondary-button small-button" whileHover={{ y: -3 }}>
                      Source Code
                      <GitBranch size={17} />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      <ImageLightbox
        isOpen={lightbox.isOpen}
        images={activeImages}
        currentIndex={lightbox.currentIndex}
        projectTitle={activeProject?.name || ''}
        onClose={closeGallery}
        onNext={showNext}
        onPrev={showPrev}
        onSelect={selectImage}
      />
    </section>
  )
}
