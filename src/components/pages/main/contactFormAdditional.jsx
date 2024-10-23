import style from './contactFormAdditional.module.css';
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function ContactFormAdditional() {
    return (
        <div className={style.container}>
            <h3>КОНТАКТНЫЕ ДАННЫЕ</h3>
            <div className={style.row}>
                <div className={style.icon}><FiMapPin /></div>
                <div className={style.content}>
                    <p><strong>Адрес: </strong> 143930, Московская обл., г. Балашиха, мкр. Салтыковка, ш. Разинское, д. 69, помещ. 171, офис 522А</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.icon}><FiPhone /></div>
                <div className={style.content}>
                    <p><strong>Телефон: </strong> +7 (495) 123-45-67</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.icon}><FiMail /></div>
                <div className={style.content}>
                    <p><strong>Почта: </strong> info@vostok-gelios.ru</p>
                </div>
            </div>
            <div className={style.rules}>
                <div style={{ backgroundColor: '#fff', width: '8px', height: '100%', marginRight: '10px' }}></div>
                <p style={{textAlign: 'justify'}}>*Отправляя сведения через форму обратной связи вы соглашаетесь с правилами обрабоки персональных данных. Обращение к Вам и телефонный номер обязательны для заполнения. Все данные, указанные на этой странице, не являются публичной офертой.</p>
            </div>
        </div>
    )
}