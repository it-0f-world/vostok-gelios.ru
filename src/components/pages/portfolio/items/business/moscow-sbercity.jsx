import style from '../portfolio-sbercity.module.css'
import CarouselRoof from './embla-carousel/moscow-sbercity-roof-embla.jsx'
import CarouselFront from './embla-carousel/moscow-sbercity-front-embla.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function Sbercity(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для штаба строительства ЖК «Сберсити»</h1>
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h6>Задача:</h6>
                        <p>Снизить энергопотребление штаба строительства, проработка технических решений по установке крышных и фасадных СЭС для дальнейшего применения на жилых корпусах ЖК «Сберсити».</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>ООО «Юнигрин Инжиниринг» (ГК «Хевел»).</p>
                            <p><strong>Конечный заказчик: </strong>АО «Рублево-Архангельское» (входит в ГК ПАО «Сбербанк)».</p>
                            <p><strong>Дата: </strong>февраль - апрель 2023 г.</p>
                            <p><strong>Срок выполнения: </strong>60 рабочих дней.</p>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Работа СЭС удовлетворила заказчика, заказчик принял решение применять фасадные и крышные СЭС на жилых корпусах ЖК «Сберсити».</li>
                            </ul>
                        </div>
                        <div className={style.solution}>
                            <h3>Решения для проекта:</h3>
                            <ul>
                                <li>Смонтирована первая фасадная солнечная электростанция в России на вентилируемом фасаде с применением фотоэлектрических модулей BIPV-типа, установленной мощностью 18,8 кВт.</li>
                                <li>Смонтирована крышная СЭС установленной мощностью 115,2 кВт.</li>
                                <li>Применены фотоэлектрические солнечные модули марки «Хевел» мощностью 320 Вт и марки «Хевел BIPV» 285 Вт, сетевые солнечные инверторы «Sungrow SG50CX» (2 шт) и Sungrow SG20RT» (1 шт).</li>
                                <li>Фотоэлектрические солнечные модули смонтированы на алюминиевых опорных конструкциях марки «B2.Solar».</li>
                                <li>Установлена система мониторинга солнечной станции.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.carousel}>
                    <CarouselRoof options={OPTIONS} />
                    <CarouselFront options={OPTIONS} />
                </div>
            </div>
            <HireUs />
            <Portfolio />
            <div style={{height: '2rem'}}></div>
            <ContactForm />
        </div>
    )
}