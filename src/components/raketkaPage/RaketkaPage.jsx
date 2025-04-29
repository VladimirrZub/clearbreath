import React from 'react'
import s from './Raketka.module.css'

const RaketkaPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerInfo}>
				<div className={s.infoTopText}>Понятная и эффективная схема работы</div>
				<div className={s.infoMainVid}>
					<div className={s.vidIMG}></div>
					<div className={s.vidLeft}>
						<div className={s.vidBox}>
							<div className={s.boxImage1}></div>
							<div className={s.boxTopText}>Получение заявки</div>
							<div className={s.boxBotText}>
								Заполните форму, укажите свои данные и отправьте нашим
								<br />
								менеджерам в обработку
							</div>
						</div>
						<div className={s.vidBox}>
							<div className={s.boxImage2}></div>
							<div className={s.boxTopText}>Выезд на объект</div>
							<div className={s.boxBotText}>
								В назначенное время мы выезжаем на объект и согласовываем
								<br />
								основные технические решения, обсуждаем техническое задание
							</div>
						</div>
						<div className={s.vidBox}>
							<div className={s.boxImage3}></div>
							<div className={s.boxTopText}>Договор</div>
							<div className={s.boxBotText}>
								Мы заключаем с Вами договор и начинаем проектирование
								<br /> и согласование проекта
							</div>
						</div>
					</div>
					<div className={s.vidRight}>
						<div className={s.vidBox}>
							<div className={s.boxImage4}></div>
							<div className={s.boxTopText}>Консультация</div>
							<div className={s.boxBotText}>
								После обработки Вашей заявки, мы связываемся с Вами, выявляем
								<br />
								потребности и пожелания, а также проводим техническую
								консультацию
							</div>
						</div>
						<div className={s.vidBox}>
							<div className={s.boxImage5}></div>
							<div className={s.boxTopText}>Составляем График</div>
							<div className={s.boxBotText}>
								На этом этапе мы составляем коммерческое предложение и
								занимаемся
								<br /> согласованием графика работ (проектирования, закупки
								оборудования и монтажа).
							</div>
						</div>
						<div className={s.vidBox}>
							<div className={s.boxImage6}></div>
							<div className={s.boxTopText}>Поставка и монтаж</div>
							<div className={s.boxBotText}>
								На этом этапе, происходит поставка всех материалов
								<br /> и начинается выполнение монтажных работ
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={s.infoBot}>
				<div className={s.botText}>Подписание акта выполненных работ</div>
				<div className={s.botIMG}></div>
			</div>
		</div>
	)
}

export default RaketkaPage
