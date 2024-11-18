import style from './top.module.css'
import logo from '../../../assets/images/logo/Logo.svg'

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
                    
                </div>
            </div>
        </div>
    )
}

export default Top