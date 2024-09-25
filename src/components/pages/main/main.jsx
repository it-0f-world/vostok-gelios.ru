import style from "./main.module.css";

export default function Main() {
    return (
        <>
          <header className={style.header}>
            <h1>ПРОЕКТИРОВАНИЕ, МОНТАЖ И НАЛАДКА<br /> СОЛНЕЧНЫХ ЭЛЕКТРОСТАНЦИЙ<br /> ЛЮБОЙ СЛОЖНОСТИ</h1>
            <p style={{padding: '1em 0'}}>Стабильность, надежность и качество на каждом этапе.</p>
            <div className={style.buttonContainer}>
              <button className={style.buttonOrder}>ОПРОСНЫЙ ЛИСТ</button>
              <button className={style.buttonContacts}>КОНТАКТЫ</button>
            </div>
            <p style={{padding: '1em 0 0'}}>Солнечные панели представляют собой эффективное и экологичное решение для снижения затрат на электроэнергию и снижения выбросов углекислого газа. Солнечная энергия является надежным источником возобновляемой энергии как для жилых, так и для промышленных целей. При минимальном техническом обслуживании и длительном сроке службы солнечные панели помогают вам добиться энергетической независимости, защитить от роста цен на электроэнергию и сделать планету более зеленой. Выбирайте солнечную энергию для получения более чистой, разумной и экономичной энергии сегодня и завтра.</p>
          </header>
          <div className={style.types}>
            <div className={style.typesLeft}>
              <div className={style.typesLeftL}>
                <div style={{ display: 'flex'}}>
                  <div className={style.orangeSquare}></div>
                  <div className={style.blueTitle}><h6>Типы СЭС</h6></div>
                </div>
                <div className={style.typesLeftContent}>
                  <h2>ОСНОВНЫЕ ТИПЫ <br/>ПРИМЕНЯЕМЫХ <br/>В НАСТОЯЩЕЕ ВРЕМЯ <span style={{color: '#ff8c00'}}>СЭС</span></h2>
                  <p>Наши предложения <br/>по постройке солнечных <br/>электростанций</p>
                </div>
              </div>
              <div className={style.typesLeftR}>
                
              </div>
            </div>
            <div className={style.typesRight}>

            </div>
          </div>
        </>
    )
}