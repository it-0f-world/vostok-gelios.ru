import style from "./installationVariants.module.css";

export default function Types() {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div style={{ display: 'flex' }}>
                    <div className={style.orangeSquare}></div>
                    <div className={style.blueTitle}><h6>Варианты размещения СЭС</h6></div>
                </div>
                <h2>СПОСОБЫ УСТАНОВКИ <span style={{ color: '#ff8c00' }}>СЭС</span></h2>
                <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%'}}></div>
            </div>
            <div className={style.bottom}>
                <div className={style.b01}>
                    <p>01</p>
                </div>
                <div className={style.b02}>
                    <p>02</p>
                </div>
                <div className={style.b03}>
                    <p>03</p>
                </div>
                <div className={style.b04}>
                    <p>04</p>
                </div>
            </div>
        </div>
)}