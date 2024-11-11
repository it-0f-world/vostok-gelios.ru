import style from '../portfolio-items.module.css'
import Carousel from './ivanovo-embla.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function Voronezh(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для кондитерской фабрики ООО «МАК‑Иваново»</h1>
                <Carousel options={OPTIONS} />
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h6>Задача:</h6>
                        <p>Снизить энергопотребление аэровокзального комплекса</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>ООО «БалтЭнергоМаш.</p>
                            <p><strong>Конечный заказчик: </strong>ООО «МАК‑Иваново».</p>
                            <p><strong>Дата: </strong>ноябрь-декабрь 2023 г.</p>
                            <p><strong>Срок выполнения: </strong>30 рабочих дней.</p>
                            <h3 className={style.results}>Задачи проекта:</h3>
                            <ul>
                                <li>Снизить энергопотребление фабрики.</li>
                                <li>Компенсировать недостаток электроэнергии и мощности из сети в моменты пикового потребления фабрики.</li>
                            </ul>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Расчетная выработка СЭС составляет 127,5 МВт·ч в год.</li>
                                <li>Экономия составляет 900 000₽ в год.</li>
                            </ul>
                        </div>
                        <div className={style.solution}>
                            <h3>Решения для проекта:</h3>
                            <ul>
                                <li>Смонтирована наземная солнечная электростанция установленной мощностью 155,52 кВт.</li>
                                <li>Применены фотоэлектрические солнечные модули марки «Delta» мощностью 360 Вт и сетевые солнечные инверторы «SMARTWATT GRID G2 60K» (2 шт).</li>
                                <li>Фотоэлектрические солнечные модули смонтированы на опорных конструкциях марки «B2.Solar» (12 шт).</li>
                                <li>Установлена система мониторинга солнечной станции.</li>
                                <li>Установлена и настроена система ограничения выдачи мощности СЭС.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <HireUs />
            <Portfolio />
            <div style={{height: '2rem'}}></div>
            <ContactForm />
        </div>
    )
}