import Header from './header'
import Profitability from './profitability'
import HowItWorks from './howItWorks'
import InstallationStages from '../forIndustrial/installationStages'
import HireUs from '../forIndustrial/hireUs'
import WhyUs from '../forIndustrial/whyUs'
import Protfolio from '../main/portfolio'
import ContactForm from '../main/contactForm'

export default function Articles() {
    return (
        <div>
            <Header />
            <Profitability />
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