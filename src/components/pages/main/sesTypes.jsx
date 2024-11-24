import style from "./sesTypes.module.css"
import {useState} from 'react'
import Modal from 'react-modal'
import WebSppModal from "./modals/webSPP"
import ReservePowerSPPModal from "./modals/reservePowerSPP"
import HybridSPPModal from "./modals/hybridElectroInstallation"

Modal.setAppElement('#root')

export default function Types() {
    const [WebSPP, setWebSPP] = useState(false)
    const [ReservePower, setReservePower] = useState(false)
    const [HybridSPP, setHybridSPP] = useState(false)
    return (
        <div className={style.types}>
            <WebSppModal isOpen={WebSPP} onRequestClose={() => setWebSPP(false)} />
            <ReservePowerSPPModal isOpen={ReservePower} onRequestClose={() => setReservePower(false)} />
            <HybridSPPModal isOpen={HybridSPP} onRequestClose={() => setHybridSPP(false)} />
            <div className={style.typesLeft}>
              <div className={style.typesLeftL}>
                <div className={style.squares}>
                  <div className={style.orangeSquare}></div>
                  <div className={style.blueTitle}><h6>Типы СЭС</h6></div>
                </div>
                <div className={style.typesLeftContent}>
                  <h2>ОСНОВНЫЕ ТИПЫ <br/>ПРИМЕНЯЕМЫХ <br/>В НАСТОЯЩЕЕ ВРЕМЯ <span style={{color: '#ff8c00'}}>СЭС</span></h2>
                  <div className={style.typesLeftContentDescription}>
                    <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%', float: 'right', marginRight: '.5rem'}}></div>
                    <p>Наши предложения <br/>по постройке солнечных <br/>электростанций</p>
                  </div>
                </div>
              </div>
              <div className={style.typesLeftR}>
                <div className={style.typesLeftContentDescription2}>
                    <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%', float: 'right'}}></div>
                    <p>Наши предложения <br/>по постройке солнечных <br/>электростанций</p>
                </div>
              </div>
            </div>
            <div className={style.typesRight}>
                <div className={style.typesRightT}>
                    <div className={style.typresRightT1}>
                    <h2>Сетевая СЭС</h2>
                    <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '50%'}}></div>
                    </div>
                    <div className={style.typresRightT2}>
                    <h2>СЭС с резервным электропитанием</h2>
                    <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '50%'}}></div>
                    </div>
                    <div className={style.typresRightT3}>
                    <h2>Автономная гибридная установка (АГЭУ)</h2>
                    <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '50%'}}></div>
                    </div>
                </div>
                <div className={style.typesRightTn}>
                    <div className={style.typresRightTn1}>
                        <ul>
                            <li>Фотоэлектрические модули (ФЭМ)</li>
                            <li>Сетевой инвертор</li>
                            <li>Устройство ограничения мощности (опция)</li>
                            <li>Система мониторинга (опция)</li>
                        </ul>
                    </div>
                    <div className={style.typresRightTn2}>
                        <ul>
                            <li>Фотоэлектрические модули (ФЭМ)</li>
                            <li>Гибридный инвертор</li>
                            <li>Система аккумуляторных батарей (АКБ)</li>
                            <li>Устройство ограничения мощности (опция)</li>
                            <li>Система мониторинга (опция)</li>
                        </ul>
                    </div>
                    <div className={style.typresRightTn3}>
                        <ul>
                            <li>Фотоэлектрические модули (ФЭМ)</li>
                            <li>Гибридный инвертор</li>
                            <li>Система аккумуляторных батарей (АКБ)</li>
                            <li>Дизельный или бензиновый электрогенератор</li>
                            <li>Система мониторинга (опция)</li>
                        </ul>
                    </div>
                </div>
                <div className={style.typesRightB}>
                    <h2>ПРЕИМУЩЕСТВА РАЗНЫХ ТИПОВ <span style={{color: '#ff8c00'}}>СЭС</span></h2>
                </div>
                <div className={style.typesRightTn}>
                    <div className={style.typresRightTn1}>
                        <ul>
                            <li>Минимальные капитальные затраты</li>
                            <li>Простота обслуживания</li>
                            <li>Отсутствие аккумуляторных батарей</li>
                            <li>Возможность подключения «зеленого тарифа» для продажи электроэнергии в сеть</li>
                            <li>Низкая стоимость генерируемой СЭС электроэнергии</li>
                        </ul>
                    </div>
                    <div className={style.typresRightTn2}>
                        <ul>
                            <li>Экономия потребляемой электроэнергии из сети</li>
                            <li>Возможность подключения «зеленого тарифа» для продажи электроэнергии в сеть</li>
                            <li>Возможность работы при пропадании электроснабжения</li>
                        </ul>
                    </div>
                    <div className={style.typresRightTn3}>
                        <ul>
                            <li>Экономия денежных средств на техническом присоединении к электросетям</li>
                            <li>Экономия потребления топлива дизельных электростанций на 50-80%</li>
                        </ul>
                    </div>
                </div>
                <div className={style.typesRightTn1}>
                    <div className={style.typresRightTn1}>
                        <button onClick={() => setWebSPP(true)} className={style.buttonTypesDesc}>ПОДРОБНЕЕ</button>
                    </div>
                    <div className={style.typresRightTn2}>
                        <button onClick={() => setReservePower(true)} className={style.buttonTypesDesc}>ПОДРОБНЕЕ</button>
                    </div>
                    <div className={style.typresRightTn3}>
                        <button onClick={() => setHybridSPP(true)} className={style.buttonTypesDesc}>ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className={style.typesRightB} style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{ backgroundColor: '#ff8c00', width: '8px', height: '100%', marginRight: '10px' }}></div>
                    <p style={{textAlign: 'justify'}}>Cолнечные станции устанавливаются на крышах предприятий, производственных линий и логистических складов, чтобы эффективно компенсировать эксплуатационные затраты на электроэнергию, снижая тем самым расходы и повышая экономическую устойчивость бизнеса. Использование солнечной энергии позволяет не только сократить счета за электроэнергию, но и внести вклад в защиту окружающей среды. Также предлагаем индивидуальные решения солнечных электростанций для вашего дома. Такие станции устанавливаются на крышах домов или в виде навеса, закрывая двор от палящих лучей солнца и проливного дождя.</p>
                </div>
            </div>

        </div>
    )
} 