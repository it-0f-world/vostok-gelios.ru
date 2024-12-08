import style from './portfolio.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { NavLink } from "react-router-dom"
import 'react-tabs/style/react-tabs.css'
import './portfolio-tabs.css'

import Vladimir from "./img/vladimir/gallery1.webp"
import Voronezh from "./img/voronezh_airport/gallery.webp";
import Ivanovo from "./img/ivanovo/gallery.webp";
import Lukoil from "./img/lukoil/gallery.webp";
import Sber from "./img/sbercity/gallery.webp";
import Hohland from "./img/hohland/gallery.webp";
import Krasnogorsk from "./img/krasnogorsk26kVt/gallery.webp";
import Rosinki from "./img/rosinki/gallery.webp";

export default function About() {
    return (
        <div className={style.wrapper} >
            <div className={style.container}>
                <div className={style.slogan}>
                    <div className={style.yellowCube}></div>
                    <div>
                        <h1>Наши проекты</h1>
                        <p>Мы нарабатываем и реализуем опыт для удовлетворения индивидуальных потребностей каждого клиента в альтернативной энергетике.</p>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                    <Tab><h2>Для Бизнеса</h2></Tab>
                    <Tab><h2>Для Частного Дома</h2></Tab>
                    </TabList>
                    <TabPanel>
                        <div className={style.objects}>
                            <NavLink to="/portfolio/voronezh-airport" className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Voronezh} alt="солнечная электростанция в аэропорту Воронежа" />
                                    <div className={style.info}>
                                        <h3 className={style.hightlight}>г. Воронеж, аэропорт</h3>
                                        <p className={style.hightlight}>102,4 кВт. Расчётная выработка 102 МВт·ч/год</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                            <NavLink to="/portfolio/ivanovo-mac-fabric" className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Ivanovo} alt="солнечная электростанция в Иваново для кондитерской фабрики" />
                                    <div className={style.info}>
                                        <h3 className={style.hightlight}>г. Иваново, кондитерская фабрика</h3>
                                        <p className={style.hightlight}>155,52 кВт. Расчётная выработка 127,5 МВт·ч/год</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                            <NavLink to="/portfolio/moscow-lukoil-office" className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Lukoil} alt="солнечная электростанция для Лукойл в Москве" />
                                    <div className={style.info}>
                                        <h3 className={style.hightlight}>г. Москва, офис Лукоил</h3>
                                        <p className={style.hightlight}>59,3 кВт. Расчётная выработка 47 МВт·ч/год</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                            <NavLink to="/portfolio/moscow-sbercity" className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Sber} alt="солнечная электростанция для ЖК Сберсити в Москве" />
                                    <div className={style.info}>
                                        <h3 className={style.hightlight}>г. Москва, ЖК Сберсити</h3>
                                        <p className={style.hightlight}>115,2 кВт. Фасадные и крышные СЭС</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                            <NavLink to="/portfolio/moscow-hohland" className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Hohland} alt="солнечная электростанция для Хохланд в Москве" />
                                    <div className={style.info}>
                                        <h3 className={style.hightlight}>г. Москва, производство Хохланд</h3>
                                        <p className={style.hightlight}>117,5 кВт. Двухсторонние фотоэлектрические модули</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className={style.objects}>
                            <NavLink to="/portfolio/vladimir-23kVt" className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Vladimir} alt="солнечная электростанция во Владимире для частного дома" />
                                    <div className={style.info} >
                                        <h3 className={style.hightlight}>г. Владимир, частный дом</h3>
                                        <p className={style.hightlight}>23 кВт. Расчётная выработка 19,5 МВт·ч/год</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                            <NavLink to='/portfolio/krasnogorsk-26kVt' className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Krasnogorsk} alt="солнечная электростанция в Красногорске, частный дом" />
                                    <div className={style.info}>
                                        <h3 className={style.hightlight}>г. Красногорск, частный дом</h3>
                                        <p className={style.hightlight}>25,9 кВт. Расчётная выработка 18,1 МВт·ч/год</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                            <NavLink to="/portfolio/moscow-region13kVt" className={style.item}>
                                <div className={style.imageContainer}>
                                    <img src={Rosinki} alt="солнечная электростанция для частного дома в г.Москва" />
                                    <div className={style.info}>
                                        <h3 className={style.hightlight}>Московская область, частный дом</h3>
                                        <p className={style.hightlight}>13,4 кВт. Расчётная выработка 11,4 МВт·ч/год</p>
                                    </div>
                                    <div className={style.overlay}></div>
                                </div>
                            </NavLink>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}