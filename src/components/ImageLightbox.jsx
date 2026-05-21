import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ImageLightbox({
  isOpen,
  images,
  currentIndex,
  projectTitle,
  onClose,
  onNext,
  onPrev,
  onSelect,
}) {
  const hasImages = images.length > 0
  const activeImage = hasImages ? images[currentIndex] : null

  useEffect(() => {
    if (!isOpen) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} gallery`}
        >
          <button className="lightbox-scrim" type="button" aria-label="Close gallery" onClick={onClose} />

          <motion.div
            className="lightbox-panel"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <div className="lightbox-header">
              <div>
                <span>𓂀 𓆣 𓋹</span>
                <h3>{projectTitle}</h3>
              </div>
              <button type="button" className="lightbox-icon-button" aria-label="Close gallery" onClick={onClose}>
                <X size={22} />
              </button>
            </div>

            <div className="lightbox-stage">
              <button type="button" className="lightbox-nav prev" aria-label="Previous image" onClick={onPrev}>
                <ChevronRight size={28} />
              </button>

              {activeImage ? (
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22 }}
                />
              ) : (
                <div className="lightbox-empty">AM</div>
              )}

              <button type="button" className="lightbox-nav next" aria-label="Next image" onClick={onNext}>
                <ChevronLeft size={28} />
              </button>

              <span className="lightbox-count">
                {hasImages ? currentIndex + 1 : 0} / {images.length}
              </span>
            </div>

            {hasImages && (
              <div className="lightbox-thumbs" aria-label="Gallery thumbnails">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    className={index === currentIndex ? 'active' : ''}
                    aria-label={`Show image ${index + 1}`}
                    onClick={() => onSelect(index)}
                  >
                    <img src={image} alt={`${projectTitle} thumbnail ${index + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
