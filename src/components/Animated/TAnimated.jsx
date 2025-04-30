import { motion } from 'framer-motion'

const TAnimated = ({
	children,
	y = -250,
	delay = 0,
	duration = 0.5,
	...props
}) => (
	<motion.div
		initial={{ opacity: 0, y }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration, delay }}
		{...props}
	>
		{children}
	</motion.div>
)

export default TAnimated
