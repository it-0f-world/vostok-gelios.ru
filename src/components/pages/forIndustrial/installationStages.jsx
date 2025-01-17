import style from './installationStages.module.css'
import dron from './img/dron.svg'
import counter from './img/analysis.svg'
import bus from './img/logistic.svg'
import solarPanel from './img/instalation.svg'
import { LuSquareArrowRight } from "react-icons/lu";

export default function installationStages () {
    return (
        <div className={style.container}>
            <h2>Этапы установки станции</h2>
            <ul className={style.stages}>
                <li className={style.stage}>
                    <div className={style.icon}>
                        <img src={dron} alt="fpv дрон иконка" />
                    </div>
                    <h3>Предпроектное обследование</h3>
                    <p>Анализируем особенности объекта для установки солнечной электростанции</p>
                    <p className={style.highlight}>1 день</p>
                </li>
                <li className={style.stageArrow}>
                    <div className={style.arrow}><LuSquareArrowRight /></div>
                </li>
                <li className={style.stage}>
                    <div className={style.icon}>
                        <img src={counter} alt="счётчик электроэнергии с лупой иконка" />
                    </div>
                    <h3>Разработка проекта</h3>
                    <p>Готовим индивидуальное решение и документацию для станции</p>
                    <p className={style.highlight}>10 дней</p>
                </li>
                <li className={style.stageArrow}>
                    <div className={style.arrow}><LuSquareArrowRight /></div>
                </li>
                <li className={style.stage}>
                    <div className={style.icon}>
                        <img src={bus} alt="электрический микроавтобус иконка" />
                    </div>
                    <h3>Закупка и логистика</h3>
                    <p>Доставляем оборудование для солнечной электростанции</p>
                    <p className={style.highlight}>2 недели</p>
                </li>
                <li className={style.stageArrow}>
                    <div className={style.arrow}><LuSquareArrowRight /></div>
                </li>
                <li className={style.stage}>
                    <div className={style.icon}>
                        <img src={solarPanel} alt="солнечная панель иконка" />
                    </div>
                    <h3>Монтаж оборудования</h3>
                    <p>Инсталлируем солнечную электростанцию и вводим в эксплуатацию</p>
                    <p className={style.highlight}>2-4 недели</p>
                </li>
            </ul>
        </div>
    )
}