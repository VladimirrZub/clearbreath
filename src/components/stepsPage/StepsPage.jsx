import React from 'react'
import s from './StepsPage.module.css'
import LAnimated from '../Animated/LAnimated'
import RAnimated from '../Animated/RAnimated'
import BAnimated from '../Animated/BAnimated'
import AnimatedLine from '../Animated/AnimatedLine'

const StepsPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerContain}>
				<div className={s.containInfo}>
					<LAnimated delay={1} className={s.infoLeft}>
						<div className={s.leftTopInfo}>
							<div className={s.topInfoText}>3 Простых Шага</div>
							<AnimatedLine length={130} offsetY={0} delay={1} />
						</div>
						<div className={s.leftBottomInfo}>К Очищению Воздуха</div>
					</LAnimated>
					<RAnimated delay={1} className={s.infoRight}>
						<div className={s.rightTopInfo}>Кажется, Это Знак...</div>
						<div className={s.rightBottomInfo}>
							<div className={s.bottomInfoBox}>
								<div className={s.infoBoxImage}></div>
								<div className={s.infoBoxText}>
									Получите скидку 5% на монтаж при заполнении анкеты на сайте
								</div>
							</div>
							<div className={s.bottomInfoBox}>
								<div className={s.infoBoxImage}></div>
								<div className={s.infoBoxText}>
									Бесплатно сделаем проект и пусконаладку системы при заказе
									монтажа
								</div>
							</div>
							<div className={s.bottomInfoBox}>
								<div className={s.infoBoxImage}></div>
								<div className={s.infoBoxText}>
									Кэшбек до 10% дизайнерам при передаче Клиента и заказе у нас
									<br />
									проекта с монтажом!
								</div>
							</div>
						</div>
					</RAnimated>
				</div>
			</div>
			<BAnimated delay={1} className={s.containAll}>
				<div className={s.containImage}></div>
				<div className={s.containText}>
					<div>Ваше желание</div>
					<div>Заявка</div>
					<div>Реализация</div>
				</div>
			</BAnimated>
		</div>
	)
}

export default StepsPage
