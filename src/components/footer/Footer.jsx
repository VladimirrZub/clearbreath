import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.mainImage}></div>
			<div className={s.containerInfo}>
				<div className={s.infoLeft}>
					<div className={s.leftImg}></div>
					<div className={s.leftText}>
						Компания <span className={s.spanText}>"Clear Breath"</span> входит в
						число лучших
						<br /> специализированных организаций, с широким ассортиментом
						<br />
						товаров и услуг, предназначенных для систем вентиляции и<br />
						кондиционирования, предоставляющих высокий сервис и<br /> удобство
						обслуживания нашим клиентам.
					</div>
					<div className={s.leftLine}></div>
					<div className={s.leftUnderText}>
						Чистый воздух вместе с{'\u00A0'}
						<span className={s.spanTextDif}>Clear Breath</span>
					</div>
				</div>
				<div className={s.infoMid}>
					<div className={s.midTopText}>Контакты</div>
					<div className={s.allInfoTop}>
						<div className={s.infoTopBox}>
							<div className={s.infoTopImg1}></div>
							<div className={s.infoTopText}>+ 1 234 567 89 10</div>
						</div>
						<div className={s.infoTopBox}>
							<div className={s.infoTopImg1}></div>
							<div className={s.infoTopText}>+ 1 123 456 78 90</div>
						</div>
						<div className={s.infoTopBox}>
							<div className={s.infoTopImg2}></div>
							<div className={s.infoTopText}>ClearBreath@Gdeto.com</div>
						</div>
					</div>
					<div className={s.allInfoBot}>
						<div className={s.infoBotBox}>
							<div className={s.infoTopImg3}></div>
							<div className={s.infoTopText}>
								Пн - Сб: 9:00 - 19:00 <br /> Вс: выходной
							</div>
						</div>
						<div className={s.infoBotBox}>
							<div className={s.infoTopImg4}></div>
							<div className={s.infoTopText}>
								Новгородская Область,
								<br /> Великий Новгород
							</div>
						</div>
					</div>
				</div>
				<div className={s.infoRight}>
					<div className={s.rightTextTop}>Заполнить заявку</div>
					<div className={s.inputName}>
						<input
							type='text'
							name='inputName'
							placeholder='Ваше Имя'
							onclick="this.placeholder=''"
							onblur="if (this.value == '') {this.placeholder='Введите текст здесь';}"
							required
						></input>
					</div>
					<div className={s.inputPhone}>
						<input
							type='tel'
							name='inputTel'
							placeholder='Номер Телефона'
							onclick="this.placeholder=''"
							onblur="if (this.value == '') {this.placeholder='Введите текст здесь';}"
							required
						></input>
					</div>
					<button className={s.inputBTN}>
						<button className={s.BTNSecStyle}>ОТПРАВИТЬ</button>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
