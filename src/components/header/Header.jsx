import React from 'react'
import s from './Header.module.css'

const Header = () => {
	return (
		<div className={s.headerContainer}>
			<div className={s.headerMainContainer}>
				<div className={s.headerLogo}></div>
				<div className={s.headerInfo}>
					<div className={s.infoText}>Услуги</div>
					<div className={s.infoText}>О Нас</div>
					<div className={s.infoText}>Польза Продукта</div>
					<div className={s.infoText}>Оборудование</div>
					<div className={s.infoText}>Этапы Работы</div>
					<div className={s.infoText}>Отзывы</div>
				</div>
				<div className={s.headerButton}>
					<button className={s.buttonSecStyle}>
						<button className={s.buttonFeedback}>СВЯЗАТЬСЯ</button>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
