import style from './advantages.module.css';

export default function Advantages() {
    return (
        <div className={style.container}>
            <div style={{ display: 'flex' }}>
                  <div className={style.orangeSquare}></div>
                  <div className={style.blueTitle}><h6>Наши преимущества</h6></div>
            </div>
            <div className={style.content}>
                <div className={style.col}>
                    <div className={style.colContent}>
                        <h4>Экспертное обслуживание и индивидуальный подход</h4>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '33%', margin: '.5rem 0'}}></div>
                        <p>Наша команда состоит из опытных профессионалов, которые помогут вам на каждом этапе — от консультации и проектирования до установки и последующего обслуживания. Мы учитываем уникальные потребности каждого клиента, чтобы предложить наиболее эффективные решения для вашего дома или бизнеса.</p>
                    </div>
                    <div className={style.colContent}>
                        <h4>Высокое качество материалов</h4>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '33%', margin: '.5rem 0'}}></div>
                        <p>Мы используем только сертифицированные солнечные панели и оборудование напрямую от производителей, что гарантирует долгий срок службы и высокую эффективность вашей солнечной электростанции. Наша продукция отвечает международным стандартам качества и безопасности</p>
                    </div>
                    <div className={style.colContent}>
                        <h4>Прозрачные цены и выгодные условия</h4>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '33%', margin: '.5rem 0'}}></div>
                        <p>Мы предлагаем конкурентоспособные цены без скрытых платежей. </p>
                    </div>
                </div>
                <div className={style.col}>
                    <div className={style.colContent}>
                        <h4>Гарантия и сервис</h4>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '33%', margin: '.5rem 0'}}></div>
                        <p>Мы предоставляем длительные гарантии (до 30 лет) на оборудование и услуги, что обеспечивает Вам уверенность в качестве нашей работы. Вы всегда можете рассчитывать на нашу помощь в случае необходимости.</p>
                    </div>
                    <div className={style.colContent}>
                        <h4>Экологическая ответственность</h4>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '33%', margin: '.5rem 0'}}></div>
                        <p>Устанавливая солнечные панели, вы делаете важный шаг к устойчивому будущему. Наша компания активно поддерживает экологические инициативы и стремится снизить углеродный след как для клиентов, так и для общества в целом</p>
                    </div>
                    <div className={style.colContent}>
                        <h4>Надежность</h4>
                        <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '33%', margin: '.5rem 0'}}></div>
                        <p>Мы гордимся своей репутацией надежного партнера в области установки солнечных электростанций и стремимся превзойти ожидания наших клиентов.</p>
                    </div>
                </div>
            </div>
            <h3>Выбирая нас, вы выбираете качество, надежность и устойчивое будущее!</h3>
        </div>
    )
}