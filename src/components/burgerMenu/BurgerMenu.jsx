import { scaleDown as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BiMap} from 'react-icons/bi';
import { GrMemory, GrServers, GrSelection, GrCatalog, GrCodeSandbox } from "react-icons/gr";
import './burgerMenu.css';
import LogoWhite from '../../assets/images/logo/Logo-white.svg';

const BurgerMenu = (props) => {
    return (
        <Menu {...props}>
          <div className='bm-logo'>
            <NavLink to="/">
              <img src={LogoWhite} alt="Logo" style={{ width: '16rem' }} />
            </NavLink>
          </div>
          <div style={{
            fontSize: '1.6rem',
            marginTop: '.75rem',
            marginLeft: '.2rem',
          }}>
            <div>
              <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrMemory style={{ fontSize: '2.1rem', marginBottom: '-.4rem' }}/> Солнечные электростанции</NavLink>
              <NavLink to="/industrial" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrServers style={{ paddingRight: '.25rem' }}/> Предприятиям</NavLink>
              <NavLink to="/household" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrSelection style={{ paddingRight: '.25rem' }}/> Домовладениям</NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrCatalog style={{ paddingRight: '.25rem' }}/> Портфолио</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap style={{ paddingRight: '.25rem' }}/> Контакты</NavLink>
            </div>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;