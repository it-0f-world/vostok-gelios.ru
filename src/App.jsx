import Footer from './components/footer/Footer';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';
import ScrollToTop from './assets/ScrollToTop';

import Main from './components/pages/main/main'
import Portfolio from './components/pages/portfolio/portfolio'
import Contacts from './components/pages/contacts/contacts'
import Industrial from './components/pages/forIndustrial/forIndustrial'
import HouseHold from './components/pages/forHouseHolds/forHouseHolds'
import VoronezhPortfolio from './components/pages/portfolio/items/business/voronezh-airport'
import IvanovoPortfolio from './components/pages/portfolio/items/business/ivanovo-mac-fabric'
import MoscowPortfolio from './components/pages/portfolio/items/business/moscow-lukoil-office'
import SberPortfolio from './components/pages/portfolio/items/business/moscow-sbercity'
import MoscowHohland from './components/pages/portfolio/items/business/moscow-hohland'
import Vladimir23kVt from './components/pages/portfolio/items/household/vladimir-23kVt'
import Krasnogorsk26kVt from './components/pages/portfolio/items/household/krasnogorsk-26kVt'
import MoscowRegion13kVt from './components/pages/portfolio/items/household/moscow-region13kVt'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div>
        <BurgerMenu 
          pageWrapId={"page-wrap"} 
          outerContainerId={"outer-container"}
          className={style.burger}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          closeMenu={() => this.closeMenu()} // Pass closeMenu to BurgerMenu
        />
        <div id="outer-container" className={style.app}>
          <main className={style.main} id="page-wrap">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Main closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio" element={<Portfolio closeMenu={() => this.closeMenu()} />} />
              <Route path="/industrial" element={<Industrial closeMenu={() => this.closeMenu()} />} />
              <Route path="/household" element={<HouseHold closeMenu={() => this.closeMenu()} />} />
              <Route path="/contacts" element={<Contacts closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio/voronezh-airport" element={<VoronezhPortfolio closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio/ivanovo-mac-fabric" element={<IvanovoPortfolio closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio/moscow-lukoil-office" element={<MoscowPortfolio closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio/moscow-sbercity" element={<SberPortfolio closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio/moscow-hohland" element={<MoscowHohland closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio/vladimir-23kVt" element={<Vladimir23kVt closeMenu={() => this.closeMenu()} />} />
              <Route path='/portfolio/krasnogorsk-26kVt' element={<Krasnogorsk26kVt closeMenu={() => this.closeMenu()} />} />
              <Route path='/portfolio/moscow-region13kVt' element={<MoscowRegion13kVt closeMenu={() => this.closeMenu()} />} />
            </Routes>
          </main>
          <footer className={style.footer}>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
