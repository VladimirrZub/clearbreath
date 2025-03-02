import React from "react";
import s from "./ComplexPage.module.css";

const ComplexPage = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.containerContain}>
        <div className={s.containTop}>
          <div className={s.topTextUp}>Комплексное Решение По Монтажу</div>
          <div className={s.topTextDown}>
            <div className={s.TextDownTxt}>И Вентиляции Под Ключ</div>
            <div className={s.TextDownLine}></div>
          </div>
        </div>
        <div className={s.containMid}>
          <div className={s.midBoxsTop}>
            <div className={s.boxsTop}>
              <div className={s.boxsImgTop1}></div>
              <div className={s.boxsTextTop}>Квартиры и офисы</div>
            </div>
            <div className={s.boxsTop}>
              <div className={s.boxsImgTop2}></div>
              <div className={s.boxsTextTop}>Магазины и ТЦ</div>
            </div>
            <div className={s.boxsTop}>
              <div className={s.boxsImgTop3}></div>
              <div className={s.boxsTextTop}>Фитнес центры</div>
            </div>
            <div className={s.boxsTop}>
              <div className={s.boxsImgTop4}></div>
              <div className={s.boxsTextTop}>Бассейны</div>
            </div>
          </div>



          <div className={s.midBoxsDown}>
            <div className={s.boxsDown}>
              <div className={s.boxsImgDown1}></div>
              <div className={s.boxsTextDown}>Загородные дома, <br /> коттеджи, таунхаусы</div>
            </div>
            <div className={s.boxsDown}>
              <div className={s.boxsImgDown2}></div>
              <div className={s.boxsTextDown}>Рестораны, кафе, бары</div>
            </div>
            <div className={s.boxsDown}>
              <div className={s.boxsImgDown3}></div>
              <div className={s.boxsTextDown}>Стоматологии, клиники</div>
            </div>
            <div className={s.boxsDown}>
              <div className={s.boxsImgDown4}></div>
              <div className={s.boxsTextDown}>Салоны красоты, СПА</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplexPage;
