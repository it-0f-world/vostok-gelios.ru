import style from './webSiteSections.module.css'
import { NavLink } from "react-router-dom";
import { LuFactory } from "react-icons/lu";
import { BiBuildingHouse } from "react-icons/bi";
import { BiMap } from 'react-icons/bi';
import { GrMemory, GrCatalog } from "react-icons/gr";

const WebSiteSections = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.rules}>
                <div className={style.line}></div>
                <p>*Отправляя данные через эту форму, вы подтверждаете своё согласие с обработкой и хранением персональных данных в соответствии с законодательством Российской Федерации. Ваши данные не будут передаваться третьим лицам и будут использованы исключительно для выполнения ваших запросов. Все данные, указанные на этой странице, не являются публичной офертой.</p>
            </div>
            <div className={style.container}>
                <NavLink to="/" className={style.pages}><GrMemory className={style.icon} />ГЛАВНАЯ</NavLink>
                <div className={style.divider}></div>
                <NavLink to="/industrial" className={style.pages}><LuFactory className={style.icon} />ДЛЯ БИЗНЕСА</NavLink>
                <div className={style.divider}></div>
                <NavLink to="/household" className={style.pages}><BiBuildingHouse className={style.icon} />ДОМОВЛАДЕНИЯМ</NavLink>
                <div className={style.divider}></div>
                <NavLink to="/portfolio" className={style.pages}><GrCatalog className={style.icon} />ПОРТФОЛИО</NavLink>
                <div className={style.divider}></div>
                <NavLink to="/contacts" className={style.pages}><BiMap className={style.icon} />КОНТАКТЫ</NavLink>
            </div>
        </div>
    )
}
export default WebSiteSections