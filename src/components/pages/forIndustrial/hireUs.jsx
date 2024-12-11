import style from './hireUs.module.css'
import { NavLink } from 'react-router-dom'

export default function HireUs() {
    return (
        <div className={style.container}>
            <h2>Закажите бесплатную консультацию солнечного эксперта</h2>
            <NavLink to='/contacts' className={style.button}>ОСТАВИТЬ ЗАЯВКУ</NavLink>
        </div>
    )
}