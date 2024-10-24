import style from './howItWorks.module.css'

export default function HowItWorks() {
    return (
        <div className={style.container}>
            <div className={style.poster}>
                <h2>Как работает солнечная электростанция</h2>
            </div>
            <div className={style.description}>
                <div className={style.item}>
                    <div className={style.icon}></div>
                    <div className={style.text}>
                        <h3>Солнечные панели</h3>
                        <p>Поглощают солнечный свет и преобразуют его в постоянный электрический ток</p>
                    </div>
                </div>
            </div>
        </div>
    )
}