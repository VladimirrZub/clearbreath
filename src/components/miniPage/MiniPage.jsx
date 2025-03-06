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
          <input type='text' id='inputName' name='inputName' required></input>
          <input type='tel' id='inputPhone' name='inputPhone' required></input>
          <button className={s.inputBTN}>
            <button className={s.BTNSecStyle}>ОТПРАВИТЬ</button>
          </button>
        </div>
      </div>
    </div>

	)
}

export default MiniPage
