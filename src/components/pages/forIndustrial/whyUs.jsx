import style from './whyUs.module.css'
import { SiAffinitydesigner } from "react-icons/si";
import { GrDropbox } from "react-icons/gr";
import { FaScrewdriverWrench } from "react-icons/fa6";

export default function WhyUs() {
    return (
        <div className={style.container}>
            <h2>Почему выбирают нас</h2>
            <div className={style.row}>
                <div className={style.col1}>
                    <div className={style.icon}><SiAffinitydesigner /></div>
                    <h3>Инжиниринг</h3>
                    <p>Мы тщательно изучаем каждый объект, предоставляем точный расчет и проект, получающий положительное заключение независимой экспертизы даже с высоким уровнем сложности СС3</p>
                </div>
                <div className={style.col2}>
                    <div className={style.icon}><GrDropbox /></div>
                    <h3>Качество</h3>
                    <p>Мы реализуем проекты своими силами. Наши инженеры и инсталляторы постоянно обучаются и повышают свой уровень квалификации</p>
                </div>
                <div className={style.col3}>
                    <div className={style.icon}><FaScrewdriverWrench /></div>
                    <h3>Гарантия</h3>
                    <p>Мы имеем партнерскую сертификацию от поставщиков, поэтому предоставляем официальную гарантию от производителя на все оборудование от 5 до 15 лет</p>
                </div>
            </div>
        </div>
    )
}