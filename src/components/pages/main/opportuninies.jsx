import style from "./opportuninies.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSolarPanel, faPlugCircleBolt, faTree } from '@fortawesome/free-solid-svg-icons';

export default function Opportuninies() {
    return (
        <div className={style.container}>
            <div className={style.c1}>
                <div className={style.c1top}>
                    <div>
                        <h2>ЧТО ВЫ ПОЛУЧИТЕ, УСТАНОВИВ СЭС?</h2>
                        <p className={style.c1topDescription}>*Выгодную инвестицию и независимость от роста тарифов на электроэнергию в дальнейшем</p>
                    </div>
                    <div className={style.c1topPeriod}>
                        <p>30 ЛЕТ</p>
                        <h3>Срок службы СЭС</h3>
                    </div>
                </div>
                <div className={style.c1bottom}></div>
            </div>
            <div className={style.c2}>
                <div className={style.c2top}>
                    <h3>Окупаемость СЭС:</h3>
                    <p>&bull; В зависимости от региона <span style={{color: '#ff8c00'}}>от 4 лет.</span></p>
                    <p>&bull; Выгоду от установки СЭС и независимость от роста тарифов вы получаете <span style={{color: '#ff8c00'}}>с первого дня.</span></p>
                </div>
                <div className={style.c2bottom}></div>
            </div>
            <div className={style.c3}>
                <div className={style.c3content}>
                    <div>
                        <div className={style.c3Icon} ><FontAwesomeIcon icon={faSun} /><FontAwesomeIcon icon={faSolarPanel} /><FontAwesomeIcon icon={faPlugCircleBolt} /></div>
                        <h3>Повысите качество напряжения для своих нужд при минимальном обслуживании.</h3>
                    </div>
                    <div>
                        <div className={style.c3Icon} style={{float: 'right', color: 'green' }}><FontAwesomeIcon icon={faTree} /></div>
                        <h3>Статус инновационной экологичной компании или прогрессивного хозяина.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}