import style from '../portfolio-items.module.css'
import Carousel from './embla-carousel/moscow-region13kVt.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function Vladimir23kVt(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для частного дома в Московской области</h1>
                <Carousel options={OPTIONS} />
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h6>Задача:</h6>
                        <p>Снизить энергопотребление дома, создать систему резервирования электроэнергии на случай отключения внешнего электроснабжения дома</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>Частное лицо</p>
                            <p><strong>Конечный заказчик: </strong>Частное лицо</p>
                            <p><strong>Дата: </strong>май 2024 г.</p>
                            <p><strong>Срок выполнения: </strong>5 рабочих дней.</p>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Расчетная выработка СЭС составляет 11,4 МВт·ч в год</li>
                                <li>Экономия составляет 100 000₽ в год</li>
                                <li>Установлена система резервирования электроснабжения дома</li>
                            </ul>
                        </div>
                        <div className={style.solution}>
                            <h3>Решения для проекта:</h3>
                            <ul>
                                <li>Смонтирована крышная солнечная электростанция установленной мощностью 13,4 кВт.</li>
                                <li>Установлена литий-железо-фосфатная система АКБ Dyness A48100/48V100Ah 4.8kWh.</li>
                                <li>Применены фотоэлектрические солнечные модули марки «Хевел» мощностью 320 Вт и гибридный солнечный инвертор «Deye SUN-12K-G03».</li>
                                <li>Фотоэлектрические солнечные модули смонтированы на алюминиевых опорных конструкциях марки «B2.Solar».</li>
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