import React from 'react'
import s from './ComfortPage.module.css'

const ComfortPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerInfo}>
				<div className={s.infoLeft}>
					<div className={s.leftTopText}>
						Комфорт И Уют <br /> В Любое Время Года
					</div>
					<div className={s.leftImagesLine}>
						<div className={s.img1}></div>
						<div className={s.img2}></div>
						<div className={s.img3}></div>
						<div className={s.img4}></div>
						<div className={s.img5}></div>
						<div className={s.img6}></div>
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
					<button className={s.botBTN}>
						<button className={s.infoBtn}>ЗАПОЛНИТЬ ЗАЯВКУ</button>
					</button>
				</div>
				<div className={s.circleBig}></div>
				<div className={s.infoRight}>
					<div className={s.imgLeft}>
						<div className={s.img11}></div>
						<div className={s.img22}></div>
					</div>
					<div className={s.imgRight}>
						<div className={s.img33}></div>
						<div className={s.img44}></div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ComfortPage
