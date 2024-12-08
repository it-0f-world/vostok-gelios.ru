import {useState} from 'react'
import Modal from 'react-modal'
import style from "./installationVariants.module.css";
import FlatRoofSppModal from "./modals/flatRoofSpp";
import FrontSppModal from "./modals/frontSpp";
import PitchedSppModal from "./modals/pitchedSpp";
import EarthSppModal from "./modals/earthSpp";

Modal.setAppElement('#root')

export default function Types() {
    const [flatRoofSpp, setflatRoofSpp] = useState(false)
    const [frontSpp, setFrontSpp] = useState(false)
    const [pitchedSpp, setPitchedSpp] = useState(false)
    const [earthSpp, setEarthSpp] = useState(false)
    return (
        <div className={style.container}>
            <FlatRoofSppModal isOpen={flatRoofSpp} onRequestClose={() => setflatRoofSpp(false)} />
            <FrontSppModal isOpen={frontSpp} onRequestClose={() => setFrontSpp(false)} />
            <PitchedSppModal isOpen={pitchedSpp} onRequestClose={() => setPitchedSpp(false)} />
            <EarthSppModal isOpen={earthSpp} onRequestClose={() => setEarthSpp(false)} />
            <div className={style.top}>
                <div style={{ display: 'flex' }}>
                    <div className={style.orangeSquare}></div>
                    <div className={style.blueTitle}><h6 className={style.titleDesctop}>Варианты размещения СЭС</h6><h6 className={style.titleMobile}>Размещение СЭС</h6></div>
                </div>
                <h2>СПОСОБЫ УСТАНОВКИ <span style={{ color: '#ff8c00' }}>СЭС</span></h2>
                <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%'}}></div>
            </div>
            <div className={style.bottom}>
                <div className={style.b01}>
                    <div className={style.info}>
                        <h2 className={style.h2desc}>Крышная СЭС <br/>для плоской кровли</h2>
                        <h2 className={style.h2mobile}>Крышная СЭС для плоской кровли</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>на 20% больше модулей на единицу площади</li>
                            <li>минимизируется затенение </li>
                            <li>увеличение генерации в утренние и вечерние часы</li>
                            <li>удешевление опорной конструкции за счёт меньшей металлоёмкости</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setflatRoofSpp(true)} className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
                <div className={style.b02}>
                    <div className={style.info}>
                        <h2 className={style.h2desc}>Фасадная СЭС</h2>
                        <h2 className={style.h2mobile}>Фасадная СЭС</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>современный и лаконичный дизайн</li>
                            <li>короткое время сборки</li>
                            <li>использование существующей инфраструктуры</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setFrontSpp(true)} className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
                <div className={style.b03}>
                    <div className={style.info}>
                        <h2 className={style.h2desc}>Крышная СЭС <br/>для скатной кровли</h2>
                        <h2 className={style.h2mobile}>Крышная СЭС для скатной кровли</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>возможна установка на все виды кровли</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setPitchedSpp(true)} className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
                <div className={style.b04}>
                    <div className={style.info}>
                        <h2 className={style.h2desc}><span style={{ color: '#ffd700' }}>С</span>олнечная <span style={{ color: '#ffd700' }}>Э</span>лектро <br/><span style={{ color: '#ffd700' }}>С</span>танция на земле</h2>
                        <h2 className={style.h2mobile}>Солнечная Электро Станция на земле</h2>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '20%'}}></div>
                        <ul>
                            <li>простота конструкции</li>
                            <li>для изготовления опорных конструкций используется горячеоцинкованная сталь с толщиной цинка 80-250 мкм</li>
                            <li>высокая скорость строительства</li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={() => setEarthSpp(true)} className={style.buttonDesc}>УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
            </div>
        </div>
)}