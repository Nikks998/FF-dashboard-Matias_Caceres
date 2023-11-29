import { motion } from 'framer-motion'

const animations = {
    initial: { x: 100 },
    animate: { x: 0 },
    exit: { x: -100 }
}

export const AnimatedPage = ({ children }) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    )
}