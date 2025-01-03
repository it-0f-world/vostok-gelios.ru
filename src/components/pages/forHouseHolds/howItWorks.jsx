import style from './howItWorks.module.css'
import ImageSchemeSPP from './img/sheme-for-home.webp'

export default function HowItWorks() {
    return (
        <div className={style.container}>
            <h2>Как работает солнечная электростанция</h2>
            <div className={style.wrapper}>
                <div className={style.poster}>
                    <img src={ImageSchemeSPP} alt="схема работы солнечной электростанции в частном доме" />
                </div>
                <ul className={style.description}>
                    <li className={style.item}>
                        <div className={style.icon}><p>1</p></div>
                        <div className={style.text}>
                            <h3>Солнечные панели</h3>
                            <p>Поглощают солнечный свет и преобразуют его в постоянный электрический ток.</p>
                        </div>
                    </li>
                    <li className={style.item}>
                        <div className={style.icon}><p>2</p></div>
                        <div className={style.text}>
                            <h3>Инвертор</h3>
                            <p>Преобразует постоянный ток в переменный, отвечает за рабочий режим станции и синхронизирует сгенерированную энергию с внешней электросетью.</p>
                        </div>
                    </li>
                    <li className={style.item}>
                        <div className={style.icon}><p>3</p></div>
                        <div className={style.text}>
                            <h3>Счетчик</h3>
                            <p>Не считает потребление электроэнергии из сети во время использования собственной энергии от солнечных панелей </p>
                        </div>
                    </li>
                    <li className={style.item}>
                        <div className={style.icon}><p>4</p></div>
                        <div className={style.text}>
                            <h3>Электросеть</h3>
                            <p>Не считает потребление электроэнергии из сети во время использования собственной энергии от солнечных панелей </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}