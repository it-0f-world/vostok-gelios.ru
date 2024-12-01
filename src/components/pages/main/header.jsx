import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/images/logo/Logo-white-pure.svg";
import { LuFactory } from "react-icons/lu";
import { BiBuildingHouse } from "react-icons/bi";
import { FiPhoneCall, FiMail, FiPhoneForwarded, FiList } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.сap}>
                <div className={style.logo}>
                    <img src={Logo} className={style.logoImg} alt="logo"/>
                    <h2>ВОСТОК ГЕЛИОС</h2>
                </div>
                <div className={style.сapContacts}>
                    <div className={style.сapContactsItem}>
                        <a href="mailto:info@vostok-gelios.ru"><FiMail className={style.сapContactsItemIcon} /> info@vostok-gelios.ru</a>
                    </div>
                    <div className={style.сapContactsItem}>
                        <a href="callto:+79253467956"><FiPhoneCall className={style.сapContactsItemIcon} /> +7 925 346 7956</a>
                    </div>
                    <div className={style.сapContactsItem}>
                        <NavLink to="/contacts">
                            <HiOutlineOfficeBuilding className={style.сapContactsItemIcon} /> Московская область, г. Балашиха
                        </NavLink>
                    </div>
                </div>
                <div className={style.variants}>
                    <NavLink to="/industrial" className={style.varBiz}><LuFactory className={style.buttonIcon} /> ДЛЯ БИЗНЕСА</NavLink>
                    <div className={style.divider}></div>
                    <NavLink to="/household"  className={style.varHouse}><BiBuildingHouse className={style.buttonIcon} /> ДЛЯ ЧАСТНОГО ДОМА</NavLink>
                </div>
            </div>
            <h1>Солнечная энергия для Вашего бизнеса и дома. <br />Ваш путь к экономии и независимости.</h1>
            <div className={style.buttonContainer}>
                <button className={style.buttonOrder}>< FiPhoneForwarded style={{ fontSize: '1.5em', marginBottom: '-.2em', paddingRight: '.5rem'}} /> ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</button>
                <button className={style.buttonContacts}>< FiList style={{ fontSize: '1.5em', marginBottom: '-.2em', paddingRight: '.5rem'}} /> ЗАПОЛНИТЬ ОПРОСНЫЙ ЛИСТ</button>
            </div>
            <p className={style.headerDescription}>Эффективные решения по установке солнечных станций для бизнеса и частных домов. Выбирайте свое будущее с солнечной энергией.</p>
        </header>
    )
} 