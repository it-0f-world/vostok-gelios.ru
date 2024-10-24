import style from './forIndustrial.module.css'
import Header from './header'
import Profitability from './profitability'
import HowItWorks from './howItWorks'

export default function Articles() {
    return (
        <div className={style.container} >
            <Header />
            <Profitability />
            <HowItWorks />
        </div>
    )
}