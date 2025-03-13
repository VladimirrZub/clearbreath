import React from 'react'
import s from './AboutUsPage.module.css'

const AboutUsPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerInfo}>
				<div className={s.infoLeft}>
					<div className={s.leftText}>
						<div className={s.topText}>
							<div className={s.textTopUp}>
								<div className={s.upText}></div>
								<div className={s.upLine}></div>
							</div>
							<div className={s.textTopBot}></div>
						</div>
					</div>
				</div>
				<div className={s.infoRight}>
					<div className={s.rightBoxes}></div>
				</div>
			</div>
		</div>
	)
}

export default AboutUsPage
