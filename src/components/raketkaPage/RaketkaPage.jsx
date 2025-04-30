import React from 'react'
import s from './Raketka.module.css'
import LAnimated from '../Animated/LAnimated'
import RAnimated from '../Animated/RAnimated'
import BAnimated from '../Animated/BAnimated'
import TAnimated from '../Animated/TAnimated'

const RaketkaPage = () => {
	return (
		<div className={s.mainContainer}>
			<div className={s.containerInfo}>
				<LAnimated delay={1} className={s.infoTopText}>
					Понятная и эффективная схема работы
				</LAnimated>
				<div className={s.infoMainVid}>
					<LAnimated delay={3} x={0} className={s.vidIMG}></LAnimated>
					<div className={s.vidLeft}>
						<div className={s.vidBox}>
							<LAnimated delay={2} className={s.boxImage1}></LAnimated>
							<LAnimated delay={1.5} className={s.boxTopText}>
								Получение заявки
							</LAnimated>
							<LAnimated delay={1.5} className={s.boxBotText}>
								Заполните форму, укажите свои данные и отправьте нашим
								<br />
								менеджерам в обработку
							</LAnimated>
						</div>
						<div className={s.vidBox}>
							<LAnimated delay={2} className={s.boxImage2}></LAnimated>
							<LAnimated delay={1.5} className={s.boxTopText}>
								Выезд на объект
							</LAnimated>
							<LAnimated delay={1.5} className={s.boxBotText}>
								В назначенное время мы выезжаем на объект и согласовываем
								<br />
								основные технические решения, обсуждаем техническое задание
							</LAnimated>
						</div>
						<div className={s.vidBox}>
							<LAnimated delay={2} className={s.boxImage3}></LAnimated>
							<LAnimated delay={1.5} className={s.boxTopText}>
								Договор
							</LAnimated>
							<LAnimated delay={1.5} className={s.boxBotText}>
								Мы заключаем с Вами договор и начинаем проектирование
								<br /> и согласование проекта
							</LAnimated>
						</div>
					</div>
					<div className={s.vidRight}>
						<div className={s.vidBox}>
							<RAnimated delay={2} className={s.boxImage4}></RAnimated>
							<RAnimated delay={1.5} className={s.boxTopText}>
								Консультация
							</RAnimated>
							<RAnimated delay={1.5} className={s.boxBotText}>
								После обработки Вашей заявки, мы связываемся с Вами, выявляем
								<br />
								потребности и пожелания, а также проводим техническую
								консультацию
							</RAnimated>
						</div>
						<div className={s.vidBox}>
							<RAnimated delay={2} className={s.boxImage5}></RAnimated>
							<RAnimated delay={1.5} className={s.boxTopText}>
								Составляем График
							</RAnimated>
							<RAnimated delay={1.5} className={s.boxBotText}>
								На этом этапе мы составляем коммерческое предложение и
								занимаемся
								<br /> согласованием графика работ (проектирования, закупки
								оборудования и монтажа).
							</RAnimated>
						</div>
						<div className={s.vidBox}>
							<RAnimated delay={2} className={s.boxImage6}></RAnimated>
							<RAnimated delay={1.5} className={s.boxTopText}>
								Поставка и монтаж
							</RAnimated>
							<RAnimated delay={1.5} className={s.boxBotText}>
								На этом этапе, происходит поставка всех материалов
								<br /> и начинается выполнение монтажных работ
							</RAnimated>
						</div>
					</div>
				</div>
			</div>
			<div className={s.infoBot}>
				<BAnimated delay={1} className={s.botText}>
					Подписание акта выполненных работ
				</BAnimated>
				<TAnimated delay={1} className={s.botIMG}></TAnimated>
			</div>
		</div>
	)
}

export default RaketkaPage
