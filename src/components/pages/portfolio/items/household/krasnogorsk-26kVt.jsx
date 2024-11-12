import style from '../portfolio-items.module.css'
import Carousel from './embla-carousel/krasnogorsk-26kVt-embla.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function Krasnogorsk26kVt(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для частного дома в г. Красногорск</h1>
                <Carousel options={OPTIONS} />
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h6>Задача:</h6>
                        <p>Снизить энергопотребление дома, повысить стоимость недвижимости и создать уникальное предложение на рынке недвижимости.</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>Компания застройщик ИЖС</p>
                            <p><strong>Дата: </strong>сентябрь 2024 г.</p>
                            <p><strong>Срок выполнения: </strong>10 рабочих дней.</p>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Расчетная выработка СЭС составляет 18,1 МВт·ч в год</li>
                                <li>Экономия составляет 150 000₽ в год</li>
                            </ul>
                        </div>
                        <div className={style.solution}>
                            <h3>Решения для проекта:</h3>
                            <ul>
                                <li>Смонтирована крышная солнечная электростанция установленной мощностью 25,9 кВт.</li>
                                <li>Применены фотоэлектрические солнечные модули марки «Haitai» мощностью 540 Вт и сетевой солнечный инвертор «Goodwe GW36K-MT».</li>
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