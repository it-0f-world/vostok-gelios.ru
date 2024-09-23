import Footer from './components/footer/Footer'
import BurgerMenu from './components/burgerMenu/BurgerMenu'
import style from './App.module.css'
import { Route, Routes } from "react-router-dom"

import Main from './components/pages/main/main'
import Portfolio from './components/pages/portfolio/portfolio'
import Contacts from './components/pages/contacts/contacts'
import Industrial from './components/pages/forIndustrial/forIndustrial'
import HouseHold from './components/pages/forHouseHolds/forHouseHolds'

export default function App() {
  return (
    <div>
      <BurgerMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } className={style.burger} />
      <div id="outer-container" className={style.app}>
      <main className={style.main} id="page-wrap">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/household" element={<HouseHold />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
      </div>
    </div>
  );
}