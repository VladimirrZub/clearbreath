import React from 'react'
import s from './Header.module.css'

const Header = () => {
	return (
		<div className={s.headerContainer}>
			<div className={s.headerMainContainer}>
				<div className={s.headerLogo}></div>
				<div className={s.headerInfo}>
					<div className={s.infoText}>услуги</div>
					<div className={s.infoText}>о нас</div>
					<div className={s.infoText}>польза продукта</div>
					<div className={s.infoText}>оборудование</div>
					<div className={s.infoText}>этапы работы</div>
					<div className={s.infoText}>отзывы</div>
				</div>
				<button className={s.headerButton}>
					<button className={s.buttonSecStyle}>СВЯЗАТЬСЯ</button>
				</button>
			</div>
		</div>
	)
}

export default Header
