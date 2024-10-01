import Header from './header.jsx';
import Types from "./sesTypes.jsx";
import InstallVar from "./installationVariants.jsx";
import Opportuninies from "./opportuninies.jsx";
import AboutCompany from "./aboutCompany.jsx";
import Partners from './partners.jsx';
import Advantages from './advantages.jsx';
export default function Main() {
    return (
        <>
          <Header />
          <Opportuninies />
          <Advantages />
          <Types />
          <InstallVar />
          <AboutCompany />
          <Partners />
        </>
    )
}