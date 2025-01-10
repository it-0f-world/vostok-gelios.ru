import style from './top.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/logo/Logo-no-text.svg'
import { Gi3dStairs, GiCalculator , GiElectricalSocket  } from "react-icons/gi";
import { FiPhoneForwarded, FiList } from "react-icons/fi";
import { LuFactory } from "react-icons/lu";
import { BiBuildingHouse } from "react-icons/bi";
import PhoneCallBackModal from "../main/modals/callBack/callBack";
import {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Top = () => {
    const [PhoneCallBack, setPhoneCallBack] = useState(false)
    return (
        <div className={style.wrapper}>
            <PhoneCallBackModal isOpen={PhoneCallBack} onRequestClose={() => setPhoneCallBack(false)} />
            <h1 className={style.title}>Свяжитесь с нами</h1>
            <div className={style.container}>
                <div className={style.logoSlogan}>
                    <img src={logo} alt="логотип ООО Восток Гелиос" className={style.logotype} />
                    <h2>ВОСТОК ГЕЛИОС</h2>
                    <p>ваш путь к экономии и независимости</p>
                </div>
                <div className={style.logoDescription}>
                    <div className={style.icons}>
                        <div className={style.iconRow}>
                            <div className={style.icon}>
                                <Gi3dStairs />
                            </div>
                            <p>Выгодная инвестиция и независимость от роста тарифов на электроэнергию в дальнейшем</p>
                        </div>
                        <div className={style.iconRow}>
                            <div className={style.icon}>
                                <GiCalculator  />
                            </div>
                            <p>Окупаемость СЭС от 4 лет.  Выгода от установки СЭС и независимость от роста тарифов с первого дня.</p>
                        </div>
                        <div className={style.iconRow}>
                            <div className={style.icon}>
                                <GiElectricalSocket />
                            </div>
                            <p>Повышение качества напряжения для своих нужд при минимальном обслуживании.</p>
                        </div>
                    </div>
                    <div className={style.buttonContainer}>
                        <button onClick={() => setPhoneCallBack(true)} className={style.buttonOrder}><FiPhoneForwarded className={style.buttonsIcons} /> ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</button>
                        <NavLink to='/questionnaire' className={style.buttonContacts}><FiList className={style.buttonsIcons} /> ЗАПОЛНИТЬ ОПРОСНЫЙ ЛИСТ</NavLink>
                    </div>
                    <div className={style.description}>
                        <div style={{ backgroundColor: '#ffd700', width: '10px', height: '100%', marginRight: '10px' }}></div>
                        <p style={{textAlign: 'justify'}}>Cолнечные станции устанавливаются на крышах предприятий, производственных линий и логистических складов, чтобы эффективно компенсировать эксплуатационные затраты на электроэнергию, снижая тем самым расходы и повышая экономическую устойчивость бизнеса. Использование солнечной энергии позволяет не только сократить счета за электроэнергию, но и внести вклад в защиту окружающей среды. Также предлагаем индивидуальные решения солнечных электростанций для вашего дома. Такие станции устанавливаются на крышах домов или в виде навеса, закрывая двор от палящих лучей солнца и проливного дождя.</p>
                    </div>
                    <div className={style.variants}>
                        <NavLink to="/industrial" className={style.varItem}><LuFactory className={style.buttonIcon} /> ДЛЯ ПРОМЫШЛЕННОСТИ И БИЗНЕСА</NavLink>
                        <div className={style.divider}></div>
                        <NavLink to="/household"  className={style.varItem}><BiBuildingHouse className={style.buttonIcon} /> ДЛЯ ЧАСТНОГО ДОМА</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top