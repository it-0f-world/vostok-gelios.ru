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
                    <div>
                        <p>01</p>
                        <h2>Крышная СЭС <br/>для плоской кровли</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>на 20% больше модулей на единицу площади</li>
                            <li>минимизируется затенение </li>
                            <li>увеличение генерации в утренние и вечерние часы</li>
                            <li>удешевление опорной конструкции за счёт меньшей металлоёмкости</li>
                        </ul>
                    </div>
                    <div>
                        <button className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
                <div className={style.b02}>
                    <div>
                        <p>02</p>
                        <h2>Крышная СЭС <br/>для парковок</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>современный и лаконичный дизайн</li>
                            <li>короткое время сборки</li>
                            <li>использование существующей инфраструктуры</li>
                        </ul>
                    </div>
                    <div>
                        <button className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
                <div className={style.b03}>
                    <div>
                        <p>03</p>
                        <h2>Крышная СЭС <br/>для скатной кровли</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>возможна установка на все виды кровли</li>
                        </ul>
                    </div>
                    <div>
                        <button className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
                <div className={style.b04}>
                    <div>
                        <p>04</p>
                        <h2><span style={{ color: '#ffd700' }}>С</span>олнечная <span style={{ color: '#ffd700' }}>Э</span>лектро <br/><span style={{ color: '#ffd700' }}>С</span>танция на земле</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>простота конструкции</li>
                            <li>для изготовления опорных конструкций используется горячеоцинкованная сталь с толщиной цинка 80-250 мкм</li>
                            <li>высокая скорость строительства</li>
                        </ul>
                    </div>
                    <div>
                        <button className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
            </div>
        </div>
)}