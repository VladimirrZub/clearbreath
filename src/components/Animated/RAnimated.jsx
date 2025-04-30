import { motion } from 'framer-motion'

const RAnimated = ({
	children,
	x = 250,
	delay = 0,
	duration = 0.5,
	...props
}) => (
	<motion.div
		initial={{ opacity: 0, x }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration, delay }}
		{...props}
	>
		{children}
	</motion.div>
)

export default RAnimated
