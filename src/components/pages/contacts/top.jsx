import style from './top.module.css'
import logo from '../../../assets/images/logo/Logo.svg'
import { Gi3dStairs, GiAbacus } from "react-icons/gi";    

const Top = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Свяжитесь с нами</h1>
            <div className={style.logoContainer}>
                <div className={style.logoSlogan}>
                    <img src={logo} alt="логотип ООО Восток Гелиос" className={style.logotype} />
                    <h2>ВОСТОК ГЕЛИОС</h2>
                    <p>Ваш путь к экономии и независимости</p>
                </div>
                <div>
                    <div className={style.icons}>
                        <div className={style.iconRow}>
                            <div className={style.icon}>
                                <Gi3dStairs />
                            </div>
                            <p>Выгодная инвестиция и независимость от роста тарифов на электроэнергию в дальнейшем</p>
                        </div>
                        <div className={style.iconRow}>
                            <div className={style.icon}>
                                <GiAbacus />
                            </div>
                            <p>Окупаемость СЭС от 4 лет.  Выгода от установки СЭС и независимость от роста тарифов с первого дня.</p>
                        </div>
                        <div className={style.iconRow}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top