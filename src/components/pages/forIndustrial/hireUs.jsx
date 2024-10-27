import style from './hireUs.module.css'

export default function HireUs() {
    return (
        <div className={style.container}>
            <h2>Закажите бесплатную консультацию солнечного эксперта</h2>
            <button className={style.button}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    )
}