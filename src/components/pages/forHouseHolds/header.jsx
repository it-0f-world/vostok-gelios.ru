import style from './header.module.css'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <div className={style.container} >
            <div className={style.head}>
                <h1>Солнечная электростанция для частного дома со сроком окупаемости от 4 лет</h1>
                <div className={style.rules}>
                    <div className={style.line}></div>
                    <p>Индивидуальные решения солнечных электростанций для вашего дома. Такие станции устанавливаются на крышах домов или в виде навеса, закрывая двор от палящих лучей солнца и проливного дождя</p>
                    <NavLink to="/contacts" className={style.buttonOrder}>< AiOutlineThunderbolt style={{ fontSize: '1.5em', marginBottom: '-.2em', paddingRight: '.5rem'}} /> уменьшить затраты на электроэнергию</NavLink>
                </div>
            </div>
        </div>
    )
}