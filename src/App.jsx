import Footer from './components/footer/Footer';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import style from './App.module.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';

import Main from './components/pages/main/main';
import Portfolio from './components/pages/portfolio/portfolio';
import Contacts from './components/pages/contacts/contacts';
import Industrial from './components/pages/forIndustrial/forIndustrial';
import HouseHold from './components/pages/forHouseHolds/forHouseHolds';
import VoronezhPortfolio from './components/pages/portfolio/items/business/voronezh'

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
            <Routes>
              <Route path="/" element={<Main closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio" element={<Portfolio closeMenu={() => this.closeMenu()} />} />
              <Route path="/industrial" element={<Industrial closeMenu={() => this.closeMenu()} />} />
              <Route path="/household" element={<HouseHold closeMenu={() => this.closeMenu()} />} />
              <Route path="/contacts" element={<Contacts closeMenu={() => this.closeMenu()} />} />
              <Route path="/portfolio/voronezh-airport" element={<VoronezhPortfolio closeMenu={() => this.closeMenu()} />} />
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
