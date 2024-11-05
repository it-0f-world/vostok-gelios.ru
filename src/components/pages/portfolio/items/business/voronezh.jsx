import style from '../portfolio-items.module.css'
import Carousel from './embla-carousel.jsx'

const OPTIONS = {}

export default function Voronezh(props) {
    return (
        <div className={style.wrapper}>
            <h1>г. Воронеж, Аэропорт. <span style={{color: '#ff8c00'}}>СЭС</span> на плоской кровле.</h1>
            <Carousel options={OPTIONS} />
        </div>
    )
}