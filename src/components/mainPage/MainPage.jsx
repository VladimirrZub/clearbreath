import React from 'react'
import s from './MainPage.module.css'
import LAnimated from '../Animated/LAnimated'
import AnimatedLine from '../Animated/AnimatedLine'

const MainPage = () => {
	return (
		<div id='main' className={s.MainContainer}>
			<LAnimated delay={1} className={s.ContainerInfo}>
				<div className={s.ContainerInfoMain}>
					<div className={s.infoMainTop}>Чистый Воздух</div>
					<div className={s.infoMainBot}>
						<AnimatedLine length={250} offsetY={0} delay={1} />
						<div className={s.mainBotText}>Вместе С</div>
					</div>
				</div>
				<div className={s.ContainerInfoSec}>CLEAR BREATH</div>
				<div className={s.ContainerInfoThr}>
					<div className={s.infoThrDots}></div>
					<div className={s.infoThrText}>
						Проектирование, поставка и монтаж систем вентиляции и
						кондиционирования
					</div>
				</div>
				<div className={s.ContainerInfoAdres}>
					<div className={s.infoAdresAdr}>
						<div className={s.adresAdrImg}></div>
						<div className={s.adresAdrText}>
							Новгородский Область, Великий Новгород
						</div>
					</div>
					<div className={s.infoAdresNum}>
						<div className={s.adresNumImg}></div>
						<div className={s.adresNumText}>
							+ 1 234 567 89 10 + 1 123 456 78 90
						</div>
					</div>
				</div>
				<button className={s.ContainerInfoBTN}>
					<button className={s.infoBtn}>ОСТАВИТЬ ЗАЯВКУ</button>
				</button>
			</LAnimated>
		</div>
	)
}

export default MainPage
