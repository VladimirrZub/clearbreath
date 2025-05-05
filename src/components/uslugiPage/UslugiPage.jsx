import React from 'react'
import s from './UslugiPage.module.css'
import LAnimated from '../Animated/LAnimated'
import RAnimated from '../Animated/RAnimated'
import AnimatedLine from '../Animated/AnimatedLine'

const UslugiPage = () => {
	return (
		<div id='uslugi' className={s.mainUslugi}>
			<div className={s.uslugiInfoAndBTN}>
				<LAnimated delay={1} className={s.infoLeft}>
					<div className={s.rightTop}>Предоставляемые</div>
					<div className={s.rightUnderTop}>
						<div className={s.underTopText}>Услуги</div>
						<AnimatedLine length={325} offsetY={0} delay={1} />
					</div>
					<div className={s.rightDown}>
						<div className={s.downText}>
							При разработке проекта предложим техническое решение оптимальное
							по соотношению цены и качества, оно идеально впишется в ваш
							дизайн, а также будет учитывать все ваши пожелания.
						</div>
						<div className={s.downText}>
							Монтаж выполняется опытными бригадами с соблюдением всех
							действующих технических норм, правил безопасности <br />и строго
							по согласованному проекту.
						</div>
						<div className={s.downText}>
							Одинаково эффективно выполняем проектирование и монтаж на объектах
							любой сложности – от небольшой квартиры, до объектов со сложными
							технологическими процессами на основе действующей нормативной
							документации.
						</div>
					</div>
				</LAnimated>
				<RAnimated delay={1} className={s.infoRight}>
					<div className={s.infoBTNs}>
						<button className={s.topBTN}>
							<div className={s.BTNTextTop}>Система Вентиляции</div>
							<div className={s.BTNImageTop}></div>
						</button>
						<button className={s.downBTN}>
							<div className={s.BTNTextDown}>Кондиционирование</div>
							<div className={s.BTNImageDown}></div>
						</button>
					</div>
					<div className={s.rightMain}>
						<div className={s.mainTextBlock}>
							<div className={s.textBlock}>
								<div className={s.blockImage1}></div>
								<div className={s.blockText}>
									Проектирование систем вентиляции любой сложности
								</div>
							</div>
							<div className={s.textBlock}>
								<div className={s.blockImage2}></div>
								<div className={s.blockText}>
									Монтаж приточной вентиляции лучшего качества
								</div>
							</div>
							<div className={s.textBlock}>
								<div className={s.blockImage3}></div>
								<div className={s.blockText}>
									Монтаж вытяжной вентиляции лучшего качества
								</div>
							</div>
							<div className={s.textBlock}>
								<div className={s.blockImage4}></div>
								<div className={s.blockText}>
									Монтаж вентиляции с увлажнением воздуха
								</div>
							</div>
							<div className={s.textBlock}>
								<div className={s.blockImage5}></div>
								<div className={s.blockText}>
									Монтаж вентиляции с рекуператором
								</div>
							</div>
							<div className={s.textBlock}>
								<div className={s.blockImage6}></div>
								<div className={s.blockText}>
									Монтаж вентиляции с осушением для бассейна
								</div>
							</div>
						</div>
						<div className={s.mainImage}></div>
					</div>
				</RAnimated>
			</div>
		</div>
	)
}

export default UslugiPage
