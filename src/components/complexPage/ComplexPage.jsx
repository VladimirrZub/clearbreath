import React from 'react'
import s from './ComplexPage.module.css'
import LAnimated from '../Animated/LAnimated'
import RAnimated from '../Animated/RAnimated'
import AnimatedLine from '../Animated/AnimatedLine'

const ComplexPage = () => {
	return (
		<div id='complex' className={s.mainContainer}>
			<div className={s.containerContain}>
				<LAnimated delay={0.5} className={s.containTop}>
					<div className={s.topTextUp}>Комплексное Решение По Монтажу</div>
					<div className={s.topTextDown}>
						<div className={s.TextDownTxt}>И Вентиляции Под Ключ</div>
						<AnimatedLine length={315} offsetY={0} delay={1} />
					</div>
				</LAnimated>
				<div className={s.containMid}>
					<div className={s.midBoxsTop}>
						<LAnimated delay={1} className={s.boxsTop}>
							<div className={s.boxsImgTop1}></div>
							<div className={s.boxsTextTop}>Квартиры и офисы</div>
						</LAnimated>
						<LAnimated delay={1.2} className={s.boxsTop}>
							<div className={s.boxsImgTop2}></div>
							<div className={s.boxsTextTop}>Магазины и ТЦ</div>
						</LAnimated>
						<LAnimated delay={1.4} className={s.boxsTop}>
							<div className={s.boxsImgTop3}></div>
							<div className={s.boxsTextTop}>Фитнес центры</div>
						</LAnimated>
						<LAnimated delay={1.6} className={s.boxsTop}>
							<div className={s.boxsImgTop4}></div>
							<div className={s.boxsTextTop}>Бассейны</div>
						</LAnimated>
					</div>

					<div className={s.midBoxsDown}>
						<RAnimated delay={1} className={s.boxsDown}>
							<div className={s.boxsImgDown1}></div>
							<div className={s.boxsTextDown}>
								Загородные дома, <br /> коттеджи, таунхаусы
							</div>
						</RAnimated>
						<RAnimated delay={1.2} className={s.boxsDown}>
							<div className={s.boxsImgDown2}></div>
							<div className={s.boxsTextDown}>Рестораны, кафе, бары</div>
						</RAnimated>
						<RAnimated delay={1.4} className={s.boxsDown}>
							<div className={s.boxsImgDown3}></div>
							<div className={s.boxsTextDown}>Стоматологии, клиники</div>
						</RAnimated>
						<RAnimated delay={1.6} className={s.boxsDown}>
							<div className={s.boxsImgDown4}></div>
							<div className={s.boxsTextDown}>Салоны красоты, СПА</div>
						</RAnimated>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ComplexPage
