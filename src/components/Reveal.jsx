import { motion } from 'framer-motion'

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const axis = direction === 'up' ? 20 : direction === 'down' ? -20 : 0
  const xaxis = direction === 'left' ? 20 : direction === 'right' ? -20 : 0
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: axis, x: xaxis }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}


