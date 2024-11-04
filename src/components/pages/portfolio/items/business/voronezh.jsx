import style from '../portfolio-items.module.css'
import Carousel from './embla-carousel.jsx'

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Voronezh(props) {
    return (
        <div className={style.wrapper}>
            <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}