import style from './forIndustrial.module.css'
import Header from './header'
import Profitability from './profitability'
import HowItWorks from './howItWorks'
import InstallationStages from './installationStages'
import HireUs from './hireUs'
import WhyUs from './whyUs'
import Protfolio from '../main/portfolio'
import ContactForm from '../main/contactForm'

export default function Articles() {
    return (
        <div className={style.container} >
            <Header />
            <Profitability />
            <HowItWorks />
            <InstallationStages />
            <HireUs />
            <WhyUs />
            <Protfolio />
            <div  style={{padding: '1.6rem 0 0'}}>
                <ContactForm />
            </div>
        </div>
    )
}