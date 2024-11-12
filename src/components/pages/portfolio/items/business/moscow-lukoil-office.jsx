import style from '../portfolio-items.module.css'
import Carousel from './embla-carousel/moscow-lukoil-office-embla.jsx'
import Portfolio from '../../../main/portfolio.jsx'
import ContactForm from '../../../main/contactForm.jsx'
import HireUs from '../../../forIndustrial/hireUs.jsx'

const OPTIONS = {}

export default function LukoilOffice(props) {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1><span style={{color: '#ff8c00'}}>Солнечная станция</span><br /> для центрального офиса ПАО «Лукойл»</h1>
                <Carousel options={OPTIONS} />
                <div className={style.description}>
                    <div className={style.tasks}>
                        <h6>Задача:</h6>
                        <p>Снизить энергопотребление офисного комплекса, выполнение одного из этапов ESG-политики ПАО «Лукойл».</p>
                    </div>
                    <div className={style.specification}>
                        <div сlassName={style.info}>
                            <p><strong>Заказчик: </strong>ООО «Юнигрин Инжиниринг» (ГК «Хевел»).</p>
                            <p><strong>Конечный заказчик: </strong>ПАО «Лукойл».</p>
                            <p><strong>Дата: </strong>ноябрь 2022 г. - март 2023 г.</p>
                            <p><strong>Срок выполнения: </strong>20 рабочих дней.</p>
                            <h3 className={style.results}>Результаты работ:</h3>
                            <ul>
                                <li>Расчетная выработка СЭС составляет 47 МВт·ч в год.</li>
                                <li>Экономия составляет 400 000₽ в год.</li>
                            </ul>
                        </div>
                        <div className={style.solution}>
                            <h3>Решения для проекта:</h3>
                            <ul>
                                <li>Смонтирована первая в мире СЭС с фотоэлектрическими модулями в виде логотипа компании. Применены инновационные BIPV-модули с двухцветными кремниевыми ячейками (красного и белого цветов).</li>
                                <li>Солнечная электростанция имеет установленную мощность 59,3 кВт.</li>
                                <li>Применены фотоэлектрические солнечные модули марок «Хевел» мощностью 320 Вт и «Хевел BIPV» мощностью 205 Вт, сетевые солнечные инверторы «Deye SUN-15K-G03» (2 шт) и «Deye SUN-30K-G03» (1 шт).</li>
                                <li>Фотоэлектрические солнечные модули смонтированы на опорных конструкциях марок «B2.Solar» и ООО «МС-Солар».</li>
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