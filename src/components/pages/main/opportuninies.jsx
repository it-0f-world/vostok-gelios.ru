import style from "./opportuninies.module.css";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

export default function Opportuninies() {
    return (
        <div className={style.container}>
            <div className={style.c1}>
                <div className={style.c1top}>
                    <h2>ЧТО ВЫ ПОЛУЧИТЕ, УСТАНОВИВ СЭС?</h2>
                    <div>
                        <p>30 ЛЕТ</p>
                        <h3>Срок службы СЭС</h3>
                    </div>
                </div>
                <div className={style.c1bottom}></div>
            </div>
            <div className={style.c2}>
                <div className={style.c2top}>
                    <h3>СЭС окупается:</h3>
                    <p>В южных регионах от <span style={{color: '#ff8c00'}}>4-6 лет</span></p>
                    <p>В средней полосе от <span style={{color: '#ff8c00'}}>8-9 лет</span></p>
                    <p>В северных регионах от <span style={{color: '#ff8c00'}}>10-11 лет</span></p>
                </div>
                <div className={style.c2bottom}></div>
            </div>
            <div className={style.c3}>
                <div className={style.c3content}>
                    <div className={style.c3top}><BsFileEarmarkBarGraph /></div>
                    <h3>Окупаемость инвестиций</h3>
                    <p>По истечению срока <br/>окупаемости <b>увеличиваете <br/>свою прибыль</b></p>
                </div>
            </div>
        </div>
    );
}