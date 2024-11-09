import style from './profitability.module.css'
import { TbPigMoney } from "react-icons/tb";
import { CgPlayListRemove } from "react-icons/cg";
import { TbFilterDollar } from "react-icons/tb";
import { GiProfit } from "react-icons/gi";
import { PiSolarPanel } from "react-icons/pi";


export default function Profitability() {
    return (
        <div className={style.wrapper}>
            <div style={{ display: 'flex' }}>
                    <div className={style.orangeSquare}></div>
                    <div className={style.blueTitle}><h6>Почему это выгодно</h6></div>
            </div>
            <div className={style.container}>
                <div className={style.why}>
                </div>
                <div className={style.section}>
                    <div className={style.item}>
                        <div className={style.row}>
                            <div className={style.icon}><TbFilterDollar /></div>
                            <div className={style.title}>
                                <h3>Обеспечивает экономию расходов</h3>
                            </div>
                        </div>
                        <div className={style.info}>
                            <p>В светлое время суток солнечные батареи создают электроэнергию, которая будет использоваться для собственного потребления на производстве.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.row}>
                            <div className={style.icon}><CgPlayListRemove /></div>
                            <div className={style.title}>
                                <h3>Независимость от инфляции и роста тарифов</h3>
                            </div>
                        </div>
                        <div className={style.info}>
                            <p>Господа, базовый вектор развития позволяет выполнить важные задания по разработке инновационных методов управления процессами.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.row}>
                            <div className={style.icon}><TbPigMoney /></div>
                            <div className={style.title}>
                                <h3>Срок окупаемости от четырёх лет</h3>
                            </div>
                        </div>
                        <div className={style.info}>
                            <p>Инвестиции в солнечную электростанцию возвращаются к 3 годам. Сама станция будет генерировать электроэнергию до 40 лет.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.row}>
                            <div className={style.icon}><GiProfit /></div>
                            <div className={style.title}>
                                <h3>Увеличивает прибыльность бизнеса</h3>
                            </div>
                        </div>
                        <div className={style.info}>
                            <p>Рентабельность бизнеса увеличивается за счет экономии средств, которые не расходуются на приобретение электроэнергии от компании-поставщика.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.row}>
                            <div className={style.icon}><PiSolarPanel /></div>
                            <div className={style.title}>
                                <h3>Легко масштабируется</h3>
                            </div>
                        </div>
                        <div className={style.info}>
                            <p>Можно начать с небольшой мощности станции, которую в дальнейшем очень просто увеличивать.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}