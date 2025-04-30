import React from 'react'
import s from './ComfortPage.module.css'
import LAnimated from '../Animated/LAnimated'
import RAnimated from '../Animated/RAnimated'
import BAnimated from '../Animated/BAnimated'
import TAnimated from '../Animated/TAnimated'

const ComfortPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerInfo}>
				<LAnimated delay={1} className={s.infoLeft}>
					<div className={s.leftTopText}>
						Комфорт И Уют <br /> В Любое Время Года
					</div>
					<div className={s.leftImagesLine}>
						<LAnimated delay={0} duration={0.2} className={s.img1}></LAnimated>
						<LAnimated
							delay={0.5}
							duration={0.2}
							className={s.img2}
						></LAnimated>
						<LAnimated delay={2} duration={0.2} className={s.img3}></LAnimated>
						<LAnimated
							delay={2.5}
							duration={0.2}
							className={s.img4}
						></LAnimated>
						<LAnimated delay={3} duration={0.2} className={s.img5}></LAnimated>
						<LAnimated
							delay={3.5}
							duration={0.2}
							className={s.img6}
						></LAnimated>
					</div>
					<div className={s.leftDotsText}>
						<div className={s.dotsTXT}>
							<div className={s.dots}></div>
							<div className={s.TXT}>
								Создание комфортных условий для работы и отдыха
							</div>
						</div>
						<div className={s.dotsTXT}>
							<div className={s.dots}></div>
							<div className={s.TXT}>
								Чистый, свежий, приточный воздух круглый год
							</div>
						</div>
						<div className={s.dotsTXT}>
							<div className={s.dots}></div>
							<div className={s.TXT}>
								Удаление не приятных запахов, избыточной влажности и<br />
								накопившегося углекислого газа из помещений
							</div>
						</div>
						<div className={s.dotsTXT}>
							<div className={s.dots}></div>
							<div className={s.TXT}>
								Поддержание комфортной температуры и<br /> влажности воздуха
								зимой и летом
							</div>
						</div>
					</div>
					<div className={s.botText}>
						<span className={s.spanText}>Clear Breath</span> поможет улучшить
						ваше самочувствие и повысить работоспособность днем, а ночью подарит
						здоровый и крепкий сон. Это важно для тех, кто следит за своим
						здоровьем и здоровьем своих близких.
					</div>
					<BAnimated delay={1} className={s.botBTN}>
						<button className={s.infoBtn}>ЗАПОЛНИТЬ ЗАЯВКУ</button>
					</BAnimated>
				</LAnimated>
				<LAnimated delay={4} x={0} className={s.circleBig}></LAnimated>
				<div className={s.infoRight}>
					<div className={s.imgLeft}>
						<TAnimated delay={1} className={s.img11}></TAnimated>
						<LAnimated delay={1.1} className={s.img22}></LAnimated>
					</div>
					<div className={s.imgRight}>
						<RAnimated delay={1.2} className={s.img33}></RAnimated>
						<BAnimated delay={1.3} className={s.img44}></BAnimated>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ComfortPage
