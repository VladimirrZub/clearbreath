import React from 'react'
import s from './AboutUsPage.module.css'
import LAnimated from '../Animated/LAnimated'
import RAnimated from '../Animated/RAnimated'

const AboutUsPage = () => {
	return (
		<div id='us' className={s.mainContainer}>
			<div className={s.containerInfo}>
				<LAnimated delay={1.5} className={s.circleBig}></LAnimated>
				<LAnimated delay={1} className={s.infoLeft}>
					<div className={s.leftText}>
						<div className={s.topText}>
							<div className={s.textTopUp}>
								<div className={s.upText}>О Нас</div>
								<div className={s.upLine}>CLEAR BREATH</div>
							</div>
							<div className={s.textTopBot}>Особенности</div>
							<div className={s.textBottom}>
								Мы любим то, чем занимаемся – поэтому у нас
								<br /> индивидуальный подход к каждому человеку, креативные
								<br />
								решения для проекта любой сложности и высокий уровень
								клиентского сервиса.
								<br />
								<br />
								Именно поэтому нам доверяют сложнейшие задачи,
								<br /> рекомендуют нас и возвращаются вновь. Доверьте нам
								<br />
								воплощение ваших самых изысканных и технологичных
								<br /> задач, и мы сделаем всё с высочайшим уровнем сервиса
								<br />
								<span className={s.spanText}>
									Clear Breath. <br />
									<br /> Clear Breath{'\u00A0'}
								</span>
								гарантирует сертифицированные
								<br /> современные системы, оборудование, качественные
								<br /> материалы и самые оптимальные решения под любой
								<br /> бюджет.
							</div>
						</div>
					</div>
				</LAnimated>
				<div className={s.infoRight}>
					<div className={s.boxUp}>
						<RAnimated delay={1.5} x={0} className={s.circle}></RAnimated>
						<RAnimated delay={1} className={s.rightBox}>
							<div className={s.boxTextUp}>
								<span className={s.bigNumber}>10{'\u00A0'}</span>лет на рынке
							</div>
							<div className={s.boxTextBot}>
								Работаем
								<br />
								как единое целое
							</div>
						</RAnimated>
						<RAnimated delay={2} x={0} className={s.circle2}></RAnimated>
						<RAnimated delay={1.5} className={s.rightBox}>
							<div className={s.boxTextUp}>
								<span className={s.bigNumber}>+ 11{'\u00A0'}</span>лет стажа
							</div>
							<div className={s.boxTextBot}>
								Опытные и обученые специалисты своего дела
							</div>
						</RAnimated>
					</div>
					<div className={s.boxBot}>
						<RAnimated delay={2.5} x={0} className={s.circle3}></RAnimated>
						<RAnimated delay={2} className={s.rightBox}>
							<div className={s.boxTextUp}>
								<span className={s.bigNumber}>+ 180{'\u00A0'}</span>
								клиентов
							</div>
							<div className={s.boxTextBot}>
								Число счастливых
								<br /> клиентов за этот период
							</div>
						</RAnimated>
						<RAnimated delay={3} x={0} className={s.circle4}></RAnimated>
						<RAnimated delay={2.5} className={s.rightBox}>
							<div className={s.boxTextUp}>
								<span className={s.bigNumber}>+ 470{'\u00A0'}</span>проектов
							</div>
							<div className={s.boxTextBot}>
								Большое количество реализованных проектов
							</div>
						</RAnimated>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUsPage
