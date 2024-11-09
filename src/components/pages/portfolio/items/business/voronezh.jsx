import style from '../portfolio-items.module.css'
import Carousel from './voronezh-embla.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function Voronezh(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для международного аэропорта Воронеж</h1>
                <Carousel options={OPTIONS} />
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h2>Задача:</h2>
                        <p>Снизить энергопотребление аэровокзального комплекса</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>ООО «Юнигрин Инжиниринг» (ГК «Хевел»).</p>
                            <p><strong>Конечный заказчик: </strong>ООО «Лемакмаращстрой».</p>
                            <p><strong>Дата: </strong>октябрь-ноябрь 2023 г.</p>
                            <p><strong>Срок выполнения: </strong>25 рабочих дней.</p>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Расчетная выработка СЭС составляет 102 МВт·ч в год.</li>
                                <li>Экономия составляет 900 000₽ в год.</li>
                            </ul>
                        </div>
                        <div className={style.solution}>
                            <h3>Решения для проекта:</h3>
                            <ul>
                                <li>Смонтирована крышная солнечная электростанция установленной мощностью 102,4 кВт.</li>
                                <li>Применены фотоэлектрические солнечные модули марки «Хевел» мощностью 320 Вт и сетевой солнечный инвертор «Sungrow SG110CX».</li>
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