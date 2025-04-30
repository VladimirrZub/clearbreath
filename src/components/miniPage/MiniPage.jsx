import React from 'react'
import s from './MiniPage.module.css'
import LAnimated from '../Animated/LAnimated'
import BAnimated from '../Animated/BAnimated'

const MiniPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerContain}>
				<LAnimated delay={1} className={s.containText}>
					Оставьте заявку и мы с вами свяжемся
				</LAnimated>
				<BAnimated delay={1} className={s.containInputs}>
					<input
						type='text'
						name='inputName'
						placeholder='Ваше Имя'
						onclick="this.placeholder=''"
						onblur="if (this.value == '') {this.placeholder='Введите текст здесь';}"
						required
					></input>
					<input
						type='tel'
						name='inputTel'
						placeholder='Номер Телефона'
						onclick="this.placeholder=''"
						onblur="if (this.value == '') {this.placeholder='Введите текст здесь';}"
						required
					></input>
					<button className={s.inputBTN}>
						<button className={s.BTNSecStyle}>ОТПРАВИТЬ</button>
					</button>
				</BAnimated>
			</div>
		</div>
	)
}

export default MiniPage
