import style from './portfolio.module.css'

export default function About() {
    return (
        <div className={style.container}>
            <h1>Наши проекты</h1>
            <p>Мы нарабатываем и реализуем опыт для удовлетворения индивидуальных потребностей каждого клиента в альтернативной энергетике.</p>
            <div className={style.objects}>
                <div className={style.item}>
                </div>
                <div className={style.item}>
                </div>
                <div className={style.item}>
                </div>
                <div className={style.item}>
                </div>
            </div>
        </div>
    )
}