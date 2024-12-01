import { scaleDown as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BiMap} from 'react-icons/bi';
import { GrMemory, GrServers, GrSelection, GrCatalog } from "react-icons/gr";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import './burgerMenu.css';
import LogoWhite from '../../assets/images/logo/Logo-white-text-to-vector.svg';

const BurgerMenu = ({ closeMenu, isOpen, ...props }) => {
    return (
        <Menu  isOpen={isOpen} {...props}>
          <div className='bm-logo'>
            <NavLink to="/" onClick={closeMenu} className='bm-logo-image'>
              <img src={LogoWhite} alt="Logo" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><GrMemory style={{ fontSize: '2.1rem', marginBottom: '-.4rem' }}/> Солнечные электростанции</NavLink>
            <NavLink to="/industrial" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><GrServers style={{ paddingRight: '.25rem' }}/> Предприятиям</NavLink>
            <NavLink to="/household" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><GrSelection style={{ paddingRight: '.25rem' }}/> Домовладениям</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><GrCatalog style={{ paddingRight: '.25rem' }}/> Портфолио</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""} onClick={closeMenu}><BiMap style={{ paddingRight: '.25rem' }}/> Контакты</NavLink>
          </div>
          <div className='bm-address'>
            <a href="mailto:info@vostok-gelios.ru"><FiMail style={{ fontSize: '1.5em', marginBottom: '-.2em'}} /> info@vostok-gelios.ru</a>
            <a href="callto:+79253467956"><FiPhoneCall style={{ fontSize: '1.5em', marginBottom: '-.2em'}} /> +7 925 346 7956</a>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;