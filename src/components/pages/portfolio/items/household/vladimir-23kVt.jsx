import style from '../portfolio-items.module.css'
import Carousel from './embla-carousel/vladimir-23kVt-embla.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function Vladimir23kVt(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для частного дома в г. Владимир»</h1>
                <Carousel options={OPTIONS} />
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h6>Задача:</h6>
                        <p>Снизить энергопотребление дома, создать инфраструктуру для установки станции заряда электромобиля</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>ООО «Юнигрин Инжиниринг» (ГК «Хевел»).</p>
                            <p><strong>Конечный заказчик: </strong>частное лицо</p>
                            <p><strong>Дата: </strong>сентябрь 2022 г.</p>
                            <p><strong>Срок выполнения: </strong>10 рабочих дней.</p>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Расчетная выработка СЭС составляет 19,5 МВт·ч в год</li>
                                <li>Экономия составляет 150 000₽ в год</li>
                            </ul>
                        </div>
                        <div className={style.solution}>
                            <h3>Решения для проекта:</h3>
                            <ul>
                                <li>Смонтирована наземная солнечная электростанция установленной мощностью 117,5 кВт.</li>
                                <li>Применены двухсторонние фотоэлектрические солнечные модули марки «Хевел» мощностью 445 Вт и сетевой солнечный инвертор «Sungrow SG110CX».</li>
                                <li>Фотоэлектрические солнечные модули смонтированы на опорных конструкциях производства ООО «ЛПЗ "Сегал».</li>
                                <li>Установлена система мониторинга солнечной станции.</li>
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