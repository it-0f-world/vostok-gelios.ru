import style from './header.module.css'
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Header() {
    return (
        <div className={style.container} >
            <div className={style.head}>
                <h1>Солнечная электростанция для бизнеса со сроком окупаемости от 4 лет</h1>
                <div className={style.rules}>
                    <div className={style.line}></div>
                    <p style={{textAlign: 'justify'}}>Cолнечные станции устанавливаются на крышах предприятий, производственных линий и логистических складов, чтобы эффективно компенсировать эксплуатационные затраты на электроэнергию, снижая тем самым расходы и повышая экономическую устойчивость бизнеса. Использование солнечной энергии позволяет не только сократить счета за электроэнергию, но и внести вклад в защиту окружающей среды.</p>
                    <button className={style.buttonOrder}>< AiOutlineThunderbolt style={{ fontSize: '1.5em', marginBottom: '-.2em', paddingRight: '.5rem'}} /> уменьшить затраты на электроэнергию</button>
                </div>
            </div>
        </div>
    )
}