import React from 'react'
import s from './MainPage.module.css'

const MainPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerInfo}>
				<div className={s.infoTop}>
					<div className={s.topFirst}></div>
					<div className={s.topSecond}></div>
				</div>
				<div className={s.infoMid}></div>
				<div className={s.infoBottom}>
					<div className={s.bottomTop}></div>
					<div className={s.bottomMid}></div>
					<div className={s.bottomBot}></div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
