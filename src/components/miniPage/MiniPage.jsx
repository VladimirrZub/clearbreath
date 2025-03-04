import React from 'react'
import s from '../miniPage/MiniPage.module.css'

const MiniPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerContain}>
				<div className={s.containText}>
					Оставьте заявку и мы с вами свяжемся
				</div>
				<div className={s.containInputs}>
					<div className={s.inputName}></div>
					<div className={s.inputPhone}></div>
					<div className={s.inputBTN}></div>
					<button className={s.inputBTN}>
						<button className={s.BTNSecStyle}>ОТПРАВИТЬ</button>
					</button>
				</div>
			</div>
		</div>
	)
}

export default MiniPage
