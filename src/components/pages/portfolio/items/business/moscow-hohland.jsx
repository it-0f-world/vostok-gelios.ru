import style from '../portfolio-items.module.css'
import Carousel from './embla-carousel/moscow-hohland-embla.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function MoscowHohland(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для производственного предприятия ООО «Хохланд Руссланд»</h1>
                <Carousel options={OPTIONS} />
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h6>Задача:</h6>
                        <p>Электроснабжение предприятия осуществлялось с помощью двух установок ГПУ (предприятие не подключено к внешней энергосистеме). Установка СЭС позволила снизить нагрузку на ГПУ в часы пиковых нагрузок, тем самым появилась возможность снабжать электроэнергией предприятие только от одной ГПУ, что благоприятно повлияло на ресурс машин и расход горючего топлива</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>ООО «Юнигрин Инжиниринг» (ГК «Хевел»).</p>
                            <p><strong>Конечный заказчик: </strong>ООО «Хохланд Руссланд».</p>
                            <p><strong>Дата: </strong>июль - август 2023 г.</p>
                            <p><strong>Срок выполнения: </strong>20 рабочих дней.</p>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Установка СЭС позволила увеличить ресурс ГПУ (газопоршневых установок) предприятия, а также снизить расход горючего топлива.</li>
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