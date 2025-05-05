import React from 'react'
import s from './Footer.module.css'
import LAnimated from '../Animated/LAnimated'
import RAnimated from '../Animated/RAnimated'
import BAnimated from '../Animated/BAnimated'
import TAnimated from '../Animated/TAnimated'
import AnimatedLine from '../Animated/AnimatedLine'

const Footer = () => {
	return (
		<div id='footer' className={s.mainContainer}>
			<div className={s.mainImage}></div>
			<div className={s.containerInfo}>
				<div className={s.infoLeft}>
					<TAnimated delay={1} className={s.leftImg}></TAnimated>
					<LAnimated delay={1} className={s.leftText}>
						Компания <span className={s.spanText}>"Clear Breath"</span> входит в
						число лучших
						<br /> специализированных организаций, с широким ассортиментом
						<br />
						товаров и услуг, предназначенных для систем вентиляции и<br />
						кондиционирования, предоставляющих высокий сервис и<br /> удобство
						обслуживания нашим клиентам.
					</LAnimated>
					<AnimatedLine length={540} offsetY={0} delay={1} />
					<BAnimated delay={1} y={100} className={s.leftUnderText}>
						Чистый воздух вместе с{'\u00A0'}
						<span className={s.spanTextDif}>Clear Breath</span>
					</BAnimated>
				</div>
				<div className={s.infoMid}>
					<TAnimated delay={1} className={s.midTopText}>
						Контакты
					</TAnimated>
					<div className={s.allInfoTop}>
						<BAnimated delay={1} className={s.infoTopBox}>
							<div className={s.infoTopImg1}></div>
							<div className={s.infoTopText}>+ 1 234 567 89 10</div>
						</BAnimated>
						<BAnimated delay={1} className={s.infoTopBox}>
							<div className={s.infoTopImg1}></div>
							<div className={s.infoTopText}>+ 1 123 456 78 90</div>
						</BAnimated>
						<BAnimated delay={1} className={s.infoTopBox}>
							<div className={s.infoTopImg2}></div>
							<div className={s.infoTopText}>ClearBreath@Gdeto.com</div>
						</BAnimated>
					</div>
					<div className={s.allInfoBot}>
						<BAnimated delay={1} y={100} className={s.infoBotBox}>
							<div className={s.infoTopImg3}></div>
							<div className={s.infoTopText}>
								Пн - Сб: 9:00 - 19:00 <br /> Вс: выходной
							</div>
						</BAnimated>
						<BAnimated delay={1} y={100} className={s.infoBotBox}>
							<div className={s.infoTopImg4}></div>
							<div className={s.infoTopText}>
								Новгородская Область,
								<br /> Великий Новгород
							</div>
						</BAnimated>
					</div>
				</div>
				<div className={s.infoRight}>
					<TAnimated delay={1} className={s.rightTextTop}>
						Заполнить заявку
					</TAnimated>
					<RAnimated delay={1} className={s.inputName}>
						<input
							type='text'
							name='inputName'
							placeholder='Ваше Имя'
							onclick="this.placeholder=''"
							onblur="if (this.value == '') {this.placeholder='Введите текст здесь';}"
							required
						></input>
					</RAnimated>
					<RAnimated delay={1} className={s.inputPhone}>
						<input
							type='tel'
							name='inputTel'
							placeholder='Номер Телефона'
							onclick="this.placeholder=''"
							onblur="if (this.value == '') {this.placeholder='Введите текст здесь';}"
							required
						></input>
					</RAnimated>
					<BAnimated delay={1} y={100} className={s.BTNst}>
						<button className={s.inputBTN}>
							<button className={s.BTNSecStyle}>ОТПРАВИТЬ</button>
						</button>
					</BAnimated>
				</div>
			</div>
		</div>
	)
}

export default Footer
