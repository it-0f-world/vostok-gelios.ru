import style from './aboutCompany.module.css';
import { SiAffinitydesigner } from "react-icons/si";
import { GrDropbox } from "react-icons/gr";
import { FaScrewdriverWrench, FaGear } from "react-icons/fa6";

export default function AboutCompany() {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div style={{ display: 'flex' }}>
                    <div className={style.orangeSquare}></div>
                    <div className={style.blueTitle}><h6>О компании</h6></div>
                </div>
                <div className={style.topContent}>
                    <div className={style.topContentL}>
                        <h2>НАШИ УСЛУГИ ПО НАПРАВЛЕНИЮ СОЛНЕЧНОЙ ЭНЕРГЕТИКИ</h2>
                    </div>
                    <div className={style.topContentR}>
                        <p>Благодаря опыту, накопленному нашими специалистами в «большой энергетике», мы имеем <b>широкий круг компетенций,</b> чтобы не только построить солнечную электростанцию, но и интегрировать ее в уже существующую энергосистему промышленного предприятия любой величины</p>
                    </div>
                </div>
                <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%'}}></div>
            </div>
            <div className={style.bottom}>
                <div className={style.b01}>
                    <div className={style.squareForIcon}>
                        < SiAffinitydesigner />
                    </div>
                    <div>
                        <h2>Проектирование</h2>
                    </div>
                </div>
                <div className={style.b02}>
                    <div className={style.squareForIcon}>
                        < GrDropbox />
                    </div>
                    <div>
                        <h2>Поставка оборудования</h2>
                    </div>
                </div>
                <div className={style.b03}>
                    <div className={style.squareForIcon}>
                        < FaScrewdriverWrench />
                    </div>
                    <div>
                        <h2>Монтажные и пусконаладочные работы</h2>
                    </div>
                </div>
                <div className={style.b04}>
                    <div className={style.squareForIcon}>
                        < FaGear />
                    </div>
                    <div>
                        <h2>Сервисное обслуживание</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}