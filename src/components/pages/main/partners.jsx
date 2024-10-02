import style from "./partners.module.css";
import hevel from "./img/hevel.webp";
import haitai from "./img/haitai.webp";
import kehua from "./img/kehua.webp";
import msSolar from "./img/ms-solar24.webp";
import nvComp from "./img/nv-comp-solar.webp";
import prysmian from "./img/prysmian.webp";

export default function Partners() {
    return (
        <div className={style.container}>
            <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%', margin: '0 0 0 -6rem'}}></div>
            <h2>Мы сотрудничаем <span style={{ color: '#ff8c00' }}>с ведущими компаниями</span> отрасли:</h2>
            <div className={style.partners}>
                <div className={style.row}>
                    <div className={style.col}>
                        <img src={hevel} alt="hevel logo" />
                    </div>
                    <div className={style.col}>
                        <img src={haitai} alt="haitai logo" />
                    </div>
                    <div className={style.col}>
                        <img src={kehua} alt="kehua logo" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <img src={msSolar} alt="msSolar24 logo" />
                    </div>
                    <div className={style.col}>
                        <img src={nvComp} alt="nvComp24 logo" />
                    </div>
                    <div className={style.col}>
                        <img src={prysmian} alt="prysmian logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}