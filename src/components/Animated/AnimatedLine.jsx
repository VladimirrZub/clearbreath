import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedLine = ({
	length = 100,
	thickness = 4,
	color = 'rgba(120, 192, 129, 1)',
	delay = 0,
	offsetY = 0,
}) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	return (
		<div ref={ref} style={{ width: length }}>
			<svg width='100%' height='100%' viewBox={`0 0 ${length} ${thickness}`}>
				<motion.line
					x1='2'
					y1={thickness / 2 + offsetY}
					x2={length - 2}
					y2={thickness / 2 + offsetY}
					stroke={color}
					strokeWidth={thickness}
					strokeLinecap='round'
					initial={{ pathLength: 0 }}
					animate={inView ? { pathLength: 1 } : {}}
					transition={{
						duration: 1.5,
						delay,
						ease: 'easeOut',
					}}
				/>
			</svg>
		</div>
	)
}

export default AnimatedLine
